import { useMemo, useState } from 'react';
import type { ArticleData } from '../data/articles';
import { articles } from '../data/articles';
import { type ArticleCategoryGroup, groupArticlesByCategory } from '../data/articleCategories';
import SearchField from './SearchField';

function normalizeSearchText(value: string): string {
  return value.trim().toLowerCase();
}

export function useArticleSearch() {
  const [query, setQuery] = useState('');

  const filteredGroups = useMemo((): ArticleCategoryGroup[] => {
    const normalized = normalizeSearchText(query);
    if (!normalized) {
      return groupArticlesByCategory(articles);
    }

    const matched = articles.filter((article: ArticleData) => {
      const haystack = [article.title, article.keyword, article.description, article.slug].join(' ').toLowerCase();
      return haystack.includes(normalized);
    });

    return groupArticlesByCategory(matched).filter(group => group.articles.length > 0);
  }, [query]);

  const resultCount = useMemo(
    () => filteredGroups.reduce((total, group) => total + group.articles.length, 0),
    [filteredGroups]
  );

  return {
    query,
    setQuery,
    filteredGroups,
    resultCount,
    trimmedQuery: query.trim(),
  };
}

export function ArticleSearchBar({
  query,
  onChange,
  resultCount,
}: {
  query: string;
  onChange: (value: string) => void;
  resultCount?: number;
}) {
  return (
    <SearchField
      id="articles-search"
      label="Search articles"
      placeholder="Search guides by topic, keyword, or university…"
      value={query}
      onChange={onChange}
      resultCount={resultCount}
    />
  );
}
