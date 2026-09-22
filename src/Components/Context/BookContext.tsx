'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export interface BookContextType {
  readList: number[];
  wishList: number[];
  setReadList: (id: number) => void;
  setWishList: (id: number) => void;
  isLoaded: boolean; // Added to interface
}

export const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readList, setReadList] = useState<number[]>([]);
  const [wishList, setWishList] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    try {
      const storedRead = localStorage.getItem('readList');
      const storedWish = localStorage.getItem('wishList');

      if (storedRead) setReadList(JSON.parse(storedRead));
      if (storedWish) setWishList(JSON.parse(storedWish));
    } catch (e) {
      console.error('Error parsing localStorage:', e);
    } finally {
      setIsLoaded(true); // Mark as loaded after reading localStorage
    }
  }, []);

  const handleSetReadList = (id: number) => {
    setReadList((current) => {
      if (current.includes(id)) return current;
      const updated = [...current, id];
      localStorage.setItem('readList', JSON.stringify(updated));
      return updated;
    });
  };

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
        isLoaded, // Added to provider value
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