import React from 'react';
import Link from 'next/link'; // 1. Import Link from next/link
import Image from 'next/image';
import { Book } from './Shared/BookCard';

const ListedBookCard = ({ book }: { book: Book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    rating,
    tags,
    publisher,
    yearOfPublishing,
    totalPages,
  } = book;

  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white flex flex-col md:flex-row gap-6 items-center">
      {/* Book Image */}
      <div className="bg-[#131313]/5 rounded-2xl p-8 flex items-center justify-center w-full md:w-60 h-60 shrink-0">
        <Image
          src={image}
          alt={bookName}
          width={130}
          height={180}
          className="h-44 w-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Book Details */}
      <div className="flex-1 w-full space-y-3">
        <h2 className="text-2xl font-bold font-serif text-[#131313]">{bookName}</h2>
        <p className="text-gray-600 font-medium">By : {author}</p>

        {/* Tags & Year */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="font-bold text-[#131313]">Tag</span>
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-[#23BE0A] bg-[#23BE0A]/10 text-xs font-semibold"
            >
              #{tag}
            </span>
          ))}
          <span className="text-gray-500">Year of Publishing: {yearOfPublishing}</span>
        </div>

        {/* Publisher & Pages */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500">
          <span>Publisher: {publisher}</span>
          <span>Pages: {totalPages}</span>
        </div>

        <div className="border-t border-gray-200 my-3" />

        {/* Category, Rating & View Details Link */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex gap-3">
            <span className="px-4 py-2 rounded-full bg-[#328EFF]/10 text-[#328EFF] text-xs font-medium">
              Category: {category}
            </span>
            <span className="px-4 py-2 rounded-full bg-[#FFAC33]/10 text-[#FFAC33] text-xs font-medium">
              Rating: {rating.toFixed(1)} ★
            </span>
          </div>

          {/* 2. Set the navigation path to /books/${bookId} */}
          <Link
            href={`/Books/${bookId}`}
            className="btn bg-[#23BE0A] hover:bg-[#1f9c09] text-white border-none rounded-full px-6 font-semibold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;