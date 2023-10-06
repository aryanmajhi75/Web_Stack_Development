import React from 'react';

const BookDetails = ({ books, book,onReviewButtonClick }) => {
  console.log(book.title)

  if (!books || !book) {
    return <div>Book not found.</div>;
  }

  const handleReviewButtonClick= () => {
      onReviewButtonClick();
      
  }

  return (
    <div>
      <h2>Book Details</h2>
      <h3>{book.title}</h3>
      <img src={book.imageLink} alt={book.title} height={50}></img>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <p>Language: {book.language}</p>
      <p>Country: {book.country}</p>
      <p>Number of Pages: {book.pages}</p>
      <button onClick={handleReviewButtonClick}>Write a Review</button>
    </div>
  );
};

export default BookDetails;

//       "author": "Virginia Woolf",
//       "country": "United Kingdom",
//       "imageLink": "images/mrs-dalloway.jpg",
//       "language": "English",
//       "link": "https://en.wikipedia.org/wiki/Mrs_Dalloway\n",
//       "pages": 216,
//       "title": "Mrs Dalloway",
//       "year": 1925