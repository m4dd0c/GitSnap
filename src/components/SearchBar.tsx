const SearchBar = ({ onSearch }: { onSearch: (text: string) => void }) => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search issues..."
        className="p-2 w-full border border-gray-300 rounded-md"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
