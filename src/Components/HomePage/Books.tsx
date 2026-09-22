import React from 'react';
import BookCard, { Book } from '@/Components/Shared/BookCard';

const getBooks = async (): Promise<Book[]> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/booksData.json`, {
      cache: 'no-store',
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  } catch (error) {
    console.error('Error fetching books data:', error);
    return [];
  }
};

const Books = async () => {
  const bookData: Book[] = await getBooks();

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 my-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#131313] font-serif mb-10">
        Books
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {bookData.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;