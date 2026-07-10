import { INLINE_LINK_CLASS } from '../constants/site';
import type { ArticleContentBlock } from '../data/articles';

interface ArticleContentBlocksProps {
  blocks: ArticleContentBlock[];
}

export default function ArticleContentBlocks({ blocks }: ArticleContentBlocksProps) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        if (block.type === 'paragraph') {
          return (
            <p key={index} className="text-gray-700 dark:text-gray-300 leading-8">
              {block.text}
            </p>
          );
        }

        if (block.type === 'quote') {
          return (
            <blockquote
              key={index}
              className="border-l-4 border-primary-500 bg-primary-50/60 dark:bg-primary-900/20 px-5 py-4 rounded-r-xl"
            >
              <p className="text-lg italic text-gray-800 dark:text-gray-200 leading-relaxed">“{block.text}”</p>
              {block.attribution && (
                <footer className="mt-2 text-sm text-gray-500 dark:text-gray-400">— {block.attribution}</footer>
              )}
            </blockquote>
          );
        }

        if (block.type === 'image') {
          return (
            <figure key={index} className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={block.src}
                alt={block.alt}
                loading="lazy"
                decoding="async"
                className="w-full aspect-video object-cover block"
              />
            </figure>
          );
        }

        if (block.type === 'facts') {
          return (
            <div
              key={index}
              className="rounded-2xl border border-amber-200 bg-amber-50/70 dark:border-amber-900/40 dark:bg-amber-950/20 p-5"
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-amber-800 dark:text-amber-300">
                {block.title ?? 'Interesting facts'}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed list-disc pl-5">
                {block.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }

        return (
          <div key={index} className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700">
            {block.caption && (
              <p className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40">
                {block.caption}
              </p>
            )}
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/60">
                  {block.headers.map(header => (
                    <th
                      key={header}
                      scope="col"
                      className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-t border-gray-200 dark:border-gray-700 even:bg-gray-50/60 dark:even:bg-gray-900/20"
                  >
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-3 text-gray-700 dark:text-gray-300 align-top">
                        {cell.startsWith('http') ? (
                          <a href={cell} className={INLINE_LINK_CLASS} target="_blank" rel="noopener noreferrer">
                            Visit website
                          </a>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
