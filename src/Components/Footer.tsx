'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#131313] text-gray-300 pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand & Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="text-3xl font-bold text-white tracking-wide">
              Book <span className="text-[#23BE0A]">Vibe</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your ultimate digital reading companion. Discover featured reads, curate your personal bookshelf, and track your reading journey seamlessly[cite: 1, 4].
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="Github" className="p-2.5 bg-[#1f1f1f] rounded-lg text-gray-400 hover:text-[#23BE0A] hover:bg-gray-800 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="p-2.5 bg-[#1f1f1f] rounded-lg text-gray-400 hover:text-[#23BE0A] hover:bg-gray-800 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="p-2.5 bg-[#1f1f1f] rounded-lg text-gray-400 hover:text-[#23BE0A] hover:bg-gray-800 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-[#23BE0A] transition-colors">Home</Link></li>
              <li><Link href="/listed-books" className="hover:text-[#23BE0A] transition-colors">Listed Books</Link></li>
              <li><Link href="/pages-to-read" className="hover:text-[#23BE0A] transition-colors">Pages to Read</Link></li>
              <li><Link href="/about" className="hover:text-[#23BE0A] transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Book Categories (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold text-white">Categories</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#23BE0A] transition-colors">Fiction & Novels</a></li>
              <li><a href="#" className="hover:text-[#23BE0A] transition-colors">Self-Help & Mindset</a></li>
              <li><a href="#" className="hover:text-[#23BE0A] transition-colors">Business & Finance</a></li>
              <li><a href="#" className="hover:text-[#23BE0A] transition-colors">Sci-Fi & Fantasy</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Form (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-lg font-semibold text-white">Subscribe to Newsletter</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Get weekly recommendations and updates directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered bg-[#1f1f1f] text-white border-gray-700 focus:border-[#23BE0A] focus:outline-none w-full"
              />
              <button
                type="submit"
                className="btn bg-[#23BE0A] hover:bg-[#1f9c09] text-white border-none font-semibold px-6"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Book Vibe. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;