import React, { useState } from 'react';

const SearchBar = ({ setBooks, allBooks }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredBooks = allBooks.filter((book) => {
      // You can adjust this logic as needed for more complex search criteria
      const titleMatch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
      const authorMatch = book.author.toLowerCase().includes(searchTerm.toLowerCase());
      return titleMatch || authorMatch;
    });

    setBooks(filteredBooks);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
