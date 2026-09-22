'use client';

import React, { useState, useEffect } from 'react';
import { useBookContext } from '@/Components/Context/BookContext';
import { Book } from '@/Components/Shared/BookCard';
import ListedBookCard from '@/Components/ListedBookCard';

const ListedBooks = () => {
  const { readList, wishList } = useBookContext();
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [activeTab, setActiveTab] = useState<'read' | 'wishlist'>('read');
  const [sortBy, setSortBy] = useState<string>('');

  // Fetch all books
  useEffect(() => {
    fetch('http://localhost:3000/booksData.json')
      .then((res) => res.json())
      .then((data) => setAllBooks(data))
      .catch((err) => console.error(err));
  }, []);

  // Filter books based on active tab IDs stored in Context
  const targetIds = activeTab === 'read' ? readList : wishList;
  const displayedBooks = allBooks.filter((book) => targetIds.includes(book.bookId));

  // Sorting logic
  if (sortBy === 'rating') {
    displayedBooks.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'pages') {
    displayedBooks.sort((a, b) => b.totalPages - a.totalPages);
  } else if (sortBy === 'year') {
    displayedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 my-8">
      {/* Title Header */}
      <div className="bg-[#131313]/5 rounded-2xl py-8 text-center mb-8">
        <h1 className="text-3xl font-bold font-serif text-[#131313]">Books</h1>
      </div>

      {/* Sort Dropdown */}
      <div className="flex justify-center mb-10">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select bg-[#23BE0A] text-white font-semibold rounded-xl px-6 focus:outline-none cursor-pointer"
        >
          <option value="" disabled>Sort By</option>
          <option value="rating" className="bg-white text-gray-800">Rating</option>
          <option value="pages" className="bg-white text-gray-800">Number of Pages</option>
          <option value="year" className="bg-white text-gray-800">Publish Year</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab('read')}
          className={`py-3 px-5 font-semibold text-base border-b-2 transition-all ${
            activeTab === 'read'
              ? 'border-[#23BE0A] text-[#23BE0A]'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Read Books ({readList.length})
        </button>
        <button
          onClick={() => setActiveTab('wishlist')}
          className={`py-3 px-5 font-semibold text-base border-b-2 transition-all ${
            activeTab === 'wishlist'
              ? 'border-[#23BE0A] text-[#23BE0A]'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Wishlist Books ({wishList.length})
        </button>
      </div>

      {/* Book Cards Container */}
      {displayedBooks.length > 0 ? (
        <div className="space-y-6">
          {displayedBooks.map((book) => (
            <ListedBookCard key={book.bookId} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <p className="text-lg text-gray-500 font-medium">
            No books found in your {activeTab === 'read' ? 'Read List' : 'Wishlist'} yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default ListedBooks;