import React from 'react';

const BookList = ({ books,onBookSelect}) => {

  return (
    <div className="book-list">
      <h2>Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <button onClick={() => onBookSelect(book)}>
              {book.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;