import re

with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    c = f.read()

replacement = """export function getArticleImageAlt(slugOrArticle: string | any): string {
  const slug = typeof slugOrArticle === "string" ? slugOrArticle : slugOrArticle.slug;
  const article = getArticleBySlug(slug);
  const alt = article?.featuredImageAlt?.trim();
  if (alt) {
    return alt;
  }
  return article ? `${article.title} - ${article.keyword}` : '';
}

export function getArticleBySlug"""

c = re.sub(r'(?s)export function getArticleImageAlt.*?export function getArticleBySlug', replacement, c)

with open('src/data/articles.ts', 'w', encoding='utf-8') as f:
    f.write(c)
