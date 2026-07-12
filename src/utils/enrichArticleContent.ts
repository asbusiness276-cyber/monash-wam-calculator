import type { ArticleContentBlock, ArticleData, ArticleSection } from '../data/articles';
import { getSectionEnhancements } from '../data/articleEnrichments';

export interface SectionEnhancement {
  facts?: Array<{ title?: string; items: string[]; afterParagraph?: number }>;
  tables?: Array<{
    caption?: string;
    headers: string[];
    rows: string[][];
    afterParagraph?: number;
  }>;
  images?: Array<{ src?: string; alt: string; afterParagraph?: number; width?: number; height?: number }>;
  extraParagraphs?: string[];
}

const FEATURED_IMAGE_WIDTH = 1280;
const FEATURED_IMAGE_HEIGHT = 720;

function imageBlock(
  src: string | undefined,
  alt: string,
  article: ArticleData,
  dimensions?: { width?: number; height?: number }
): ArticleContentBlock {
  const resolvedSrc = src || article.featuredImage;
  const isFeatured =
    !src || src === article.featuredImage || src === 'FEATURED_IMAGE';
  const width = dimensions?.width ?? (isFeatured ? FEATURED_IMAGE_WIDTH : undefined);
  const height = dimensions?.height ?? (isFeatured ? FEATURED_IMAGE_HEIGHT : undefined);
  return {
    type: 'image',
    src: resolvedSrc,
    alt,
    ...(width && height ? { width, height } : {}),
  };
}

function pushAfterParagraph(
  blocks: ArticleContentBlock[],
  paragraphIndex: number,
  enhancement: SectionEnhancement | undefined,
  article: ArticleData
) {
  if (!enhancement) return;

  enhancement.facts
    ?.filter(item => item.afterParagraph === paragraphIndex)
    .forEach(item => {
      blocks.push({ type: 'facts', title: item.title, items: item.items });
    });

  enhancement.images
    ?.filter(item => item.afterParagraph === paragraphIndex)
    .forEach(item => {
      blocks.push(
        imageBlock(item.src, item.alt, article, { width: item.width, height: item.height })
      );
    });

  enhancement.tables
    ?.filter(item => item.afterParagraph === paragraphIndex)
    .forEach(item => {
      blocks.push({
        type: 'table',
        caption: item.caption,
        headers: item.headers,
        rows: item.rows,
      });
    });
}

function enrichSection(
  section: ArticleSection,
  sectionIndex: number,
  article: ArticleData,
  enhancement: SectionEnhancement | undefined
): ArticleSection {
  if (section.blocks?.length) {
    return section;
  }

  if (!section.paragraphs?.length) {
    return section;
  }

  const blocks: ArticleContentBlock[] = [];

  section.paragraphs.forEach((text, paragraphIndex) => {
    blocks.push({ type: 'paragraph', text });
    pushAfterParagraph(blocks, paragraphIndex, enhancement, article);
  });

  enhancement?.extraParagraphs?.forEach(text => {
    blocks.push({ type: 'paragraph', text });
  });

  enhancement?.facts
    ?.filter(item => item.afterParagraph === undefined)
    .forEach(item => {
      blocks.push({ type: 'facts', title: item.title, items: item.items });
    });

  enhancement?.tables
    ?.filter(item => item.afterParagraph === undefined)
    .forEach(item => {
      blocks.push({
        type: 'table',
        caption: item.caption,
        headers: item.headers,
        rows: item.rows,
      });
    });

  enhancement?.images
    ?.filter(item => item.afterParagraph === undefined)
    .forEach(item => {
      blocks.push(
        imageBlock(item.src, item.alt, article, { width: item.width, height: item.height })
      );
    });

  if (blocks.length === 0) {
    return section;
  }

  return {
    heading: section.heading,
    headingLink: section.headingLink,
    blocks,
  };
}

export function enrichArticleContent(article: ArticleData): ArticleData {
  const sectionEnhancements = getSectionEnhancements(article.slug, article.featuredImage);

  if (sectionEnhancements.length === 0) {
    return article;
  }

  const sections = article.sections.map((section, index) =>
    enrichSection(section, index, article, sectionEnhancements[index])
  );

  const hasBlocks = sections.some(section => section.blocks && section.blocks.length > 0);

  if (!hasBlocks) {
    return article;
  }

  return {
    ...article,
    updatedAt: '2026-07-12',
    sections,
  };
}
