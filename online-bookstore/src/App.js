import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './BookList';
import BookDetails from './BookDetails';
import SearchBar from './SearchBar';
import ReviewPage from './ReviewPage';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState('bookList');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/books.json'); 
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchData();
  }, []);

  

  const navigateToBookDetails = (book) => {
    console.log(book)
    setSelectedBook(book);
    setCurrentPage('bookDetails');
  };

  const navigateToReviewPage = () => {
    setCurrentPage('review');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'bookList':
        return <BookList books={books} onBookSelect={navigateToBookDetails} />;
      case 'bookDetails':
        return (
          <BookDetails
          books={books}
          book={selectedBook}
          onReviewButtonClick={navigateToReviewPage}
          />
        );
      case 'review':
        return <ReviewPage />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Online Bookstore</h1>
      <SearchBar setBooks={setBooks} allBooks={books} />
      <div className="content">{renderPage()}</div>
    </div>
  );
};

export default App;
