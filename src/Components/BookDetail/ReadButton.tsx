'use client';

import React from 'react';
import { useBookContext } from '@/Components/Context/BookContext';

interface ReadButtonProps {
  bookId: number;
}

const ReadButton = ({ bookId }: ReadButtonProps) => {
  const { setReadList, setWishList, readList, wishList } = useBookContext();

  const isRead = readList.includes(bookId);
  const isWishlisted = wishList.includes(bookId);

  return (
    <div className="flex items-center gap-4">
      {/* Read Button */}
      <button
        onClick={() => setReadList(bookId)}
        className={`btn font-bold px-7 h-12 rounded-xl text-base transition-all ${
          isRead
            ? 'bg-[#23BE0A] text-white border-none'
            : 'bg-white hover:bg-gray-100 text-[#131313] border border-gray-300'
        }`}
      >
        {isRead ? 'Read ✓' : 'Read'}
      </button>

      {/* Wishlist Button */}
      <button
        onClick={() => setWishList(bookId)}
        className={`btn font-bold px-7 h-12 rounded-xl text-base border-none transition-all ${
          isWishlisted
            ? 'bg-gray-800 text-white'
            : 'bg-[#59C6D2] hover:bg-[#48b2bd] text-white'
        }`}
      >
        {isWishlisted ? 'In Wishlist ✓' : 'Wishlist'}
      </button>
    </div>
  );
};

export default ReadButton;