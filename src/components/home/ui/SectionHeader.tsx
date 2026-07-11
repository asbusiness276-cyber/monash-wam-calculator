interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <header className={`max-w-2xl mb-10 md:mb-12 ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="home-eyebrow mb-3">{eyebrow}</p>
      )}
      <h2 className="home-section-title text-gray-900 dark:text-white">{title}</h2>
      {description && (
        <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </header>
  );
}
