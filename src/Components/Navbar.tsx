import Link from 'next/link';
import React from 'react';

// Shared links variable
const links = (
  <>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/Books">Listed Books</Link></li>
    <li><Link href="/PagesTORead">Pages to Read</Link></li>
  </>
);

const Navbar = () => {
  return (
    <nav className='bg-base-100 shadow-sm'>
        <div className="navbar bg-base-100 max-w-7xl container mx-auto px-8 lg:px-16">
      {/* Mobile Menu & Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          BookVibe
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {links}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="navbar-end gap-3">
        <button className="btn bg-[#23BE0A] text-white hover:bg-[#1f9c09] border-none rounded-lg px-5">
          Sign In
        </button>
        <button className="btn bg-[#59C6D2] text-white hover:bg-[#48b2bd] border-none rounded-lg px-5">
          Sign Up
        </button>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;