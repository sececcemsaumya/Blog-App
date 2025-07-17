'use client';
import { useEffect, useState } from 'react';

const Book = ({ params }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
   
    const storedBooks = localStorage.getItem('blogs');
    if (storedBooks) {
      const books = JSON.parse(storedBooks);
      const blogId = parseInt(params.blogId, 10);
      const foundBook = books.find((b) => b.id === blogId);
      setBook(foundBook);
    }
  }, [params.blogId]);

  if (!book) {
    return <div className="blog1-page">Loading or Book not found...</div>;
  }

  return (
    <div className="blog1-page">
      <div className="book-1">
        <div>
          <img src={book.image} alt={book.title} className="book1-image" />
        </div>
        <div>
          <h3 className="book1-title">{book.title}</h3>
          <p className="book1-description">{book.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
