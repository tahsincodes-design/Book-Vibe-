'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`font-semibold rounded-lg px-4 py-2 ${
            pathname === '/'
              ? 'border border-[#23BE0A] text-[#23BE0A] bg-[#23BE0A]/10'
              : 'text-gray-700 hover:text-[#23BE0A]'
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="ListedBookPage"
          className={`font-semibold rounded-lg px-4 py-2 ${
            pathname === '/listed-books'
              ? 'border border-[#23BE0A] text-[#23BE0A] bg-[#23BE0A]/10'
              : 'text-gray-700 hover:text-[#23BE0A]'
          }`}
        >
          Listed Books
        </Link>
      </li>
      <li>
        <Link
          href="/PagesTORead"
          className={`font-semibold rounded-lg px-4 py-2 ${
            pathname === '/pages-to-read'
              ? 'border border-[#23BE0A] text-[#23BE0A] bg-[#23BE0A]/10'
              : 'text-gray-700 hover:text-[#23BE0A]'
          }`}
        >
          Pages to Read
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto px-4 lg:px-8 py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow gap-1">
            {links}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-2xl font-bold px-0 hover:bg-transparent text-gray-900">
          Book Vibe
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>

      <div className="navbar-end gap-3">
        <button className="btn bg-[#23BE0A] hover:bg-[#1f9c09] text-white border-none px-5 rounded-lg">
          Sign In
        </button>
        <button className="btn bg-[#59C6D2] hover:bg-[#48b2bd] text-white border-none px-5 rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;