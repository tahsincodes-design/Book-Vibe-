import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 my-8">
      <div className="relative overflow-hidden bg-slate-50/80 border border-slate-100 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Text & Actions */}
        <div className="relative z-10 space-y-6 text-center lg:text-left max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#23BE0A]/10 text-[#23BE0A] text-xs sm:text-sm font-semibold border border-[#23BE0A]/20">
            <span className="w-2 h-2 rounded-full bg-[#23BE0A] animate-pulse" />
            Featured Collection
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] font-serif">
            Books to freshen up <br className="hidden sm:inline" />
            <span className="text-[#23BE0A] underline decoration-wavy decoration-[#23BE0A]/30 underline-offset-8">
              your bookshelf
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Discover handpicked bestsellers, timeless classics, and modern masterpieces curated for every reader.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="/ListedBookPage"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#23BE0A] hover:bg-[#1f9c09] text-white font-bold text-base px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              View The List
            </Link>
          </div>
        </div>

        {/* Right Side: Hero Image */}
        <div className="relative z-10 flex justify-center lg:justify-end w-full lg:w-auto">
          <Image
            src={bannerImg}
            alt="Featured bookshelf cover"
            priority
            className="h-72 sm:h-80 lg:h-97.5 w-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;