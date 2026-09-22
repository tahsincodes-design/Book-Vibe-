'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useBookContext } from '@/Components/Context/BookContext';
import { Book } from '@/Components/Shared/BookCard';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Figma theme color palette
const colors = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#23BE0A',
  '#59C6D2',
  '#FF4560',
  '#775DD0',
];

// SVG Path calculation for Custom Triangle / Cone Shape Bar
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

// Custom Triangle Bar Shape Component
type TriangleBarProps = {
  fill?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

const TriangleBar = ({ fill, x, y, width, height }: TriangleBarProps) => {
  if (fill === undefined || x === undefined || y === undefined || width === undefined || height === undefined) {
    return null;
  }

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const { readList } = useBookContext();
  const [allBooks, setAllBooks] = useState<Book[]>([]);

  // Fetch all books data
  useEffect(() => {
    fetch('http://localhost:3000/booksData.json')
      .then((res) => res.json())
      .then((data) => setAllBooks(data))
      .catch((err) => console.error('Error fetching books:', err));
  }, []);

  // Filter books in readList and prepare data structure for Recharts
  const chartData = allBooks
    .filter((book) => readList.includes(book.bookId))
    .map((book) => ({
      name: book.bookName,
      pages: book.totalPages,
    }));

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 my-10">
      {/* Header Container */}
      <div className="bg-[#131313]/5 rounded-2xl py-8 text-center mb-10">
        <h1 className="text-3xl font-bold font-serif text-[#131313]">
          Pages to Read
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Visual breakdown of total pages for books in your Read list
        </p>
      </div>

      {chartData.length > 0 ? (
        /* Chart Container */
        <div className="bg-[#131313]/5 rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xs">
          <div className="w-full h-100 sm:h-120">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 30,
                  right: 20,
                  left: 10,
                  bottom: 60,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: '#555', fontSize: 12, fontWeight: 500 }}
                  interval={0}
                  angle={-20}
                  textAnchor="end"
                />
                <YAxis
                  tick={{ fill: '#555', fontSize: 12 }}
                  label={{
                    value: 'Pages',
                    angle: -90,
                    position: 'insideLeft',
                    fill: '#777',
                  }}
                />
                <Tooltip
                  formatter={(value) => [`${value ?? 0} Pages`, 'Total Pages']}
                  contentStyle={{
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  }}
                />
                <Bar
                  dataKey="pages"
                  shape={<TriangleBar />}
                  label={{
                    position: 'top',
                    fill: '#131313',
                    fontSize: 13,
                    fontWeight: 'bold',
                  }}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200 my-6">
          <div className="max-w-md mx-auto space-y-4">
            <h3 className="text-xl font-bold text-gray-800">
              No Data to Display
            </h3>
            <p className="text-gray-500 text-sm">
              You haven&apos;t marked any books as read yet. Click &quot;Read&quot; on any book to add it to your analytics chart.
            </p>
            <Link
              href="/"
              className="btn bg-[#23BE0A] hover:bg-[#1f9c09] text-white border-none rounded-xl px-6 font-semibold inline-block pt-3"
            >
              Explore Books
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PagesToRead;