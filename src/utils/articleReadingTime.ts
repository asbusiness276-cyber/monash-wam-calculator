import type { ArticleData, ArticleContentBlock } from '../data/articles';

const WORDS_PER_MINUTE = 200;

function blockText(block: ArticleContentBlock): string {
  switch (block.type) {
    case 'paragraph':
    case 'quote':
      return block.text;
    case 'facts':
      return [block.title ?? '', ...block.items].join(' ');
    case 'table':
      return [block.caption ?? '', ...block.headers, ...block.rows.flat()].join(' ');
    case 'image':
      return block.alt;
    default:
      return '';
  }
}

/** Estimated reading time from existing article body — display only. */
export function getArticleReadingTimeMinutes(article: ArticleData): number {
  const parts = [article.title, article.description, article.keyword];

  for (const section of article.sections) {
    parts.push(section.heading);
    section.paragraphs?.forEach(paragraph => parts.push(paragraph));
    section.blocks?.forEach(block => parts.push(blockText(block)));
  }

  const wordCount = parts.join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}
