/** Format ISO date (YYYY-MM-DD) for article cards — display only. */
export function formatArticleDate(isoDate: string): string {
  const parsed = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return isoDate;
  }

  return parsed.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
