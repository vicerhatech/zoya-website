import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // handle search here
      }}
      className="relative w-50% max-w-lg"
    >
      <input
        type="search"
        placeholder="Search for Supplies..."
        className="
          w-full rounded-full
          border border-purple-800 dark:border-white/10
          bg-transparent dark:bg-black/30
          px-4 pr-8 py-2 text-sm font-bold
          text-purple-900 dark:text-gray-200
          outline-purple-800
          backdrop-blur-md
        "
      />

      <button
        type="submit"
        aria-label="Search"
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          flex h-8 w-8 items-center justify-center
          rounded-full
          bg-purple-800 text-white
          hover:bg-purple-900
          dark:bg-white/10 dark:hover:bg-white/20
          transition
        "
      >
        <Search className="h-4 w-4" />
      </button>
    </form>
  );
};

export default SearchInput;
