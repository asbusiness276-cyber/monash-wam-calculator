import { Search, X } from 'lucide-react';

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  id: string;
  resultCount?: number;
}

export default function SearchField({
  value,
  onChange,
  placeholder,
  label,
  id,
  resultCount,
}: SearchFieldProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Search
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        aria-hidden
      />
      <input
        id={id}
        type="search"
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-3.5 pl-11 pr-11 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
      {typeof resultCount === 'number' && value.trim() && (
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          {resultCount} result{resultCount === 1 ? '' : 's'} found
        </p>
      )}
    </div>
  );
}
