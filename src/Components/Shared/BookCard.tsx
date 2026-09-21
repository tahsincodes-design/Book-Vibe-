import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface Book {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const { bookId, bookName, author, image, category, rating, tags } = book;

  return (
    <Link
      href={`/books/${bookId}`}
      className="group border border-gray-200/80 rounded-2xl p-6 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full w-full"
    >
      {/* Cover Image Container */}
      <div className="bg-[#F3F3F3] rounded-2xl p-6 flex items-center justify-center h-60 w-full mb-4">
        <Image
          src={image}
          alt={bookName}
          className="h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Details */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-[#23BE0A] bg-[#23BE0A]/10 text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Author */}
        <div className="space-y-1 mb-3">
          <h2 className="text-xl font-bold font-serif text-[#131313] line-clamp-1 group-hover:text-[#23BE0A] transition-colors">
            {bookName}
          </h2>
          <p className="text-sm font-medium text-gray-600">
            By : {author}
          </p>
        </div>

        {/* Dashed Separator */}
        <div className="border-t-2 border-dashed border-gray-200 my-3" />

        {/* Category & Rating */}
        <div className="flex items-center justify-between text-sm font-medium text-gray-600">
          <span>{category}</span>
          <div className="flex items-center gap-1.5 font-semibold text-gray-800">
            <span>{rating.toFixed(1)}</span>
            <span className="text-amber-400">★</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;