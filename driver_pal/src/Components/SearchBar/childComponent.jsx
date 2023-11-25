import React, { useState } from 'react';

const SearchBox = ({ onSearchResult }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Perform the search and compute the result
    const result = `Result for "${searchQuery}"`; // Replace with your actual computation

    // Call the callback function with the computed result
    onSearchResult(result);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
