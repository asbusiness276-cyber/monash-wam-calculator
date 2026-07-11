export default function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4" aria-live="polite" aria-busy="true">
      <p className="text-sm text-gray-500 dark:text-gray-400">Loading page…</p>
    </div>
  );
}
