'use client';

import React from 'react';
import Link from 'next/link';
import { Book } from '@/Components/Shared/BookCard';
import Image from 'next/image';

const ListedBookCard = ({ book }: { book: Book }) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white flex flex-col md:flex-row gap-6 items-center">
      {/* Book Cover Container */}
      <div className="bg-[#F3F3F3] rounded-2xl p-6 flex items-center justify-center w-full md:w-56 h-60 shrink-0">
        <Image
          src={book.image}
          alt={book.bookName}
          width={300}
          height={120}
          className="h-full object-contain drop-shadow-md"
        />
      </div>

      {/* Book Details */}
      <div className="flex-1 space-y-3 w-full">
        <h2 className="text-2xl font-bold font-serif text-[#131313]">
          {book.bookName}
        </h2>
        <p className="text-gray-600 font-medium text-sm">
          By : {book.author}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-3 py-1">
          <span className="font-bold text-[#131313] text-sm">Tag</span>
          {book.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-[#23BE0A] bg-[#23BE0A]/10 text-xs font-semibold"
            >
              #{tag}
            </span>
          ))}
          <span className="text-gray-500 text-sm flex items-center gap-1 ml-auto md:ml-4">
            📅 Year of Publishing: {book.yearOfPublishing}
          </span>
        </div>

        {/* Specs Pills */}
        <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-500 pt-1 border-b border-gray-100 pb-3">
          <span className="flex items-center gap-1">
            👤 Publisher: <strong className="text-gray-700">{book.publisher}</strong>
          </span>
          <span className="flex items-center gap-1">
            📄 Pages: <strong className="text-gray-700">{book.totalPages}</strong>
          </span>
        </div>

        {/* Footer Badges & CTA */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="px-4 py-2 rounded-full bg-[#328EFF]/15 text-[#328EFF] text-xs font-medium">
            Category: {book.category}
          </span>
          <span className="px-4 py-2 rounded-full bg-[#FFAC33]/15 text-[#FFAC33] text-xs font-medium">
            Rating: {book.rating.toFixed(1)} ★
          </span>
          <Link
            href={`/books/${book.bookId}`}
            className="btn bg-[#23BE0A] hover:bg-[#1f9c09] text-white border-none rounded-full px-5 min-h-0 h-9 text-sm font-semibold ml-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;