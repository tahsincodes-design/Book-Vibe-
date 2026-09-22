import ReadButton from '@/Components/BookDetail/ReadButton';
import { Book } from '@/Components/Shared/BookCard';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async (): Promise<Book[]> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/booksData.json`, {
      cache: 'no-store',
    });
    if (!response.ok) throw new Error('Failed to fetch books');
    return response.json();
  } catch (error) {
    console.error('Error fetching books data:', error);
    return [];
  }
};

const BookDetailPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const bookData = await getBooks();
  const book = bookData.find((b: Book) => b.bookId === Number(id));

  if (!book) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Book Not Found</h2>
        <Link href="/" className="btn bg-[#23BE0A] text-white hover:bg-[#1f9c09] border-none">
          Back to Home
        </Link>
      </div>
    );
  }

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 my-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 bg-[#131313]/5 rounded-3xl p-10 lg:p-16 flex items-center justify-center min-h-96">
          <Image
            src={image}
            alt={bookName}
            width={800}
            height={600}
            className="max-h-96 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#131313] leading-tight">
              {bookName}
            </h1>
            <p className="text-gray-600 font-medium text-lg mt-2">By : {author}</p>
          </div>

          <div className="border-t border-gray-200" />
          <p className="text-gray-600 font-medium text-lg">{category}</p>
          <div className="border-t border-gray-200" />

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            <span className="font-bold text-[#131313]">Review : </span>
            {review}
          </p>

          <div className="flex items-center gap-3 pt-2">
            <span className="font-bold text-[#131313]">Tag</span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span key={idx} className="px-4 py-1.5 rounded-full text-[#23BE0A] bg-[#23BE0A]/10 text-sm font-semibold">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200" />

          <div className="grid grid-cols-2 gap-y-3 max-w-sm text-sm sm:text-base py-2">
            <span className="text-gray-500">Number of Pages:</span>
            <span className="font-bold text-[#131313]">{totalPages}</span>

            <span className="text-gray-500">Publisher:</span>
            <span className="font-bold text-[#131313]">{publisher}</span>

            <span className="text-gray-500">Year of Publishing:</span>
            <span className="font-bold text-[#131313]">{yearOfPublishing}</span>

            <span className="text-gray-500">Rating:</span>
            <span className="font-bold text-[#131313]">{rating.toFixed(1)}</span>
          </div>

          <div className="pt-4">
            <ReadButton bookId={bookId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;