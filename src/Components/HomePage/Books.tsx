import React from 'react';
import BookCard, { Book } from '@/Components/Shared/BookCard';

const getBooks = async (): Promise<Book[]> => {
  const response = await fetch('http://localhost:3000/booksData.json', {
    cache: 'no-store',
  });
  return response.json();
};

const Books = async () => {
  const bookData: Book[] = await getBooks();

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 my-12">
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#131313] font-serif mb-10">
        Books
      </h1>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {bookData.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;