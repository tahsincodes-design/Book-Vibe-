'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface BookContextType {
  readList: number[];
  wishList: number[];
  setReadList: (id: number) => void;
  setWishList: (id: number) => void;
}

export const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const readStoredList = (key: string): number[] => {
    if (typeof window === 'undefined') return [];

    const stored = localStorage.getItem(key);
    if (!stored) return [];

    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error(`Error parsing ${key} from localStorage`, e);
      return [];
    }
  };

  const [readList, setReadList] = useState<number[]>(() => readStoredList('readList'));
  const [wishList, setWishList] = useState<number[]>(() => readStoredList('wishList'));

  // 2. Add to Read list and persist in localStorage
  const handleSetReadList = (id: number) => {
    setReadList((current) => {
      if (current.includes(id)) return current;
      const updated = [...current, id];
      localStorage.setItem('readList', JSON.stringify(updated));
      return updated;
    });
  };

  // 3. Add to Wishlist and persist in localStorage
  const handleSetWishList = (id: number) => {
    setWishList((current) => {
      if (current.includes(id)) return current;
      const updated = [...current, id];
      localStorage.setItem('wishList', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <BookContext.Provider
      value={{
        readList,
        wishList,
        setReadList: handleSetReadList,
        setWishList: handleSetWishList,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider');
  }
  return context;
};