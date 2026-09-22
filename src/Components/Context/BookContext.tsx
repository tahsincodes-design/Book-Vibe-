'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface BookContextType {
  readList: number[];
  wishList: number[];
  setReadList: (id: number) => void;
  setWishList: (id: number) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readList, setReadList] = useState<number[]>([]);
  const [wishList, setWishList] = useState<number[]>([]);

  const handleSetReadList = (id: number) => {
    setReadList((current) => (current.includes(id) ? current : [...current, id]));
  };

  const handleSetWishList = (id: number) => {
    setWishList((current) => (current.includes(id) ? current : [...current, id]));
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

// Custom Hook to safely consume BookContext
export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider');
  }
  return context;
};