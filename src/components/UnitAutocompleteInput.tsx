import { useCallback, useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import {
  getSmartSuggestions,
  escapeRegex,
  matchSubjectByUnit,
  unitOptions,
  subjectOptions,
} from '../utils/unitSubjectSuggestions';

interface UnitAutocompleteInputProps {
  field: 'unit' | 'subject';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
}

function renderHighlightedSuggestion(value: string, query: string) {
  if (!query.trim()) return value;
  const regex = new RegExp(`(${escapeRegex(query)})`, 'ig');
  const parts = value.split(regex);
  const normalizedQuery = query.toLowerCase();
  return parts.map((part, index) =>
    part.toLowerCase() === normalizedQuery ? (
      <mark key={`${part}-${index}`} className="bg-amber-100 dark:bg-amber-500/30 text-inherit rounded px-0.5">
        {part}
      </mark>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    )
  );
}

export default function UnitAutocompleteInput({
  field,
  value,
  onChange,
  placeholder,
  className = '',
  inputClassName = '',
}: UnitAutocompleteInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const blurTimerRef = useRef<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuStyle, setMenuStyle] = useState<CSSProperties | null>(null);

  const source = field === 'unit' ? unitOptions : subjectOptions;

  const positionMenu = useCallback(() => {
    if (!inputRef.current) return;
    const rect = inputRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const openUpward = spaceBelow < 240 && rect.top > 240;

    setMenuStyle({
      position: 'fixed',
      top: openUpward ? rect.top - 4 : rect.bottom + 4,
      left: rect.left,
      width: Math.max(rect.width, field === 'subject' ? 280 : 200),
      transform: openUpward ? 'translateY(-100%)' : undefined,
      zIndex: 99999,
    });
  }, [field]);

  const openSuggestions = useCallback(
    (query: string) => {
      if (blurTimerRef.current !== null) {
        window.clearTimeout(blurTimerRef.current);
        blurTimerRef.current = null;
      }

      const nextItems = getSmartSuggestions(source, query);
      setItems(nextItems);
      setActiveIndex(nextItems.length > 0 ? 0 : -1);
      setIsOpen(nextItems.length > 0);
    },
    [source]
  );

  const closeSuggestions = useCallback(() => {
    setIsOpen(false);
    setItems([]);
    setActiveIndex(-1);
    setMenuStyle(null);
  }, []);

  const selectSuggestion = (selected: string) => {
    onChange(selected);
    closeSuggestions();
  };

  const scheduleClose = () => {
    if (blurTimerRef.current !== null) {
      window.clearTimeout(blurTimerRef.current);
    }
    blurTimerRef.current = window.setTimeout(() => {
      closeSuggestions();
      blurTimerRef.current = null;
    }, 180);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || items.length === 0) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        openSuggestions(value);
      }
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex(prev => (prev < items.length - 1 ? prev + 1 : 0));
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex(prev => (prev > 0 ? prev - 1 : items.length - 1));
      return;
    }

    if (event.key === 'Enter' && activeIndex >= 0) {
      const selected = items[activeIndex];
      if (selected) {
        event.preventDefault();
        selectSuggestion(selected);
      }
      return;
    }

    if (event.key === 'Escape') {
      closeSuggestions();
    }
  };

  useLayoutEffect(() => {
    if (!isOpen || items.length === 0) {
      setMenuStyle(null);
      return;
    }

    positionMenu();

    const handleReposition = () => positionMenu();
    window.addEventListener('resize', handleReposition);
    window.addEventListener('scroll', handleReposition, true);

    return () => {
      window.removeEventListener('resize', handleReposition);
      window.removeEventListener('scroll', handleReposition, true);
    };
  }, [isOpen, items, value, positionMenu]);

  const dropdown =
    isOpen && items.length > 0 && menuStyle
      ? createPortal(
          <ul
            role="listbox"
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-56 overflow-y-auto"
            style={menuStyle}
          >
            {items.map((option, optionIndex) => {
              const subjectHint = field === 'unit' ? matchSubjectByUnit(option) : null;
              return (
                <li key={option} role="option" aria-selected={activeIndex === optionIndex}>
                  <button
                    type="button"
                    onMouseDown={event => {
                      event.preventDefault();
                      selectSuggestion(option);
                    }}
                    className={`w-full text-left px-3 py-2 ${
                      activeIndex === optionIndex
                        ? 'bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="text-xs font-medium">{renderHighlightedSuggestion(option, value)}</div>
                    {subjectHint && (
                      <div className="text-[10px] text-gray-500 dark:text-gray-400 truncate mt-0.5">{subjectHint}</div>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>,
          document.body
        )
      : null;

  return (
    <div className={`relative ${className}`}>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => {
          onChange(e.target.value);
          openSuggestions(e.target.value);
        }}
        onFocus={e => openSuggestions(e.target.value)}
        onClick={() => openSuggestions(value)}
        onBlur={scheduleClose}
        onKeyDown={handleKeyDown}
        className={inputClassName}
        autoComplete="off"
        aria-autocomplete="list"
        aria-expanded={isOpen}
      />
      {dropdown}
    </div>
  );
}
