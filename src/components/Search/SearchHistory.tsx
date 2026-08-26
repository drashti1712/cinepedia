interface SearchHistoryProps {
  history: string[];
  onSelect: (search: string) => void;
  onClear: () => void;
}

export default function SearchHistory({
  history,
  onSelect,
  onClear,
}: SearchHistoryProps) {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="absolute left-0 top-full z-50 mt-2 w-full rounded-xl bg-gray-900 p-3 shadow-lg">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-400">Recent searches</h2>

        <button
          type="button"
          onMouseDown={onClear}
          className="text-sm text-red-400 hover:text-red-300"
        >
          Clear
        </button>
      </div>

      <ul className="space-y-1">
        {history.map((search) => (
          <li key={search}>
            <button
              type="button"
              onMouseDown={() => onSelect(search)}
              className="w-full rounded-lg px-3 py-2 text-left text-white hover:bg-gray-800"
            >
              {search}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
