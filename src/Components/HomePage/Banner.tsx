import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bannerImg from '@/assets/hero_img.jpg'

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 my-6">
            <div className="bg-[#131313]/5 rounded-3xl p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-8">

                {/* Left Side: Heading & CTA */}
                <div className="space-y-8 text-center lg:text-left max-w-lg">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#131313] leading-tight font-serif">
                        Books to freshen up your bookshelf
                    </h1>
                    <div>
                        <Link
                            href="/listed-books"
                            className="btn bg-[#23BE0A] hover:bg-[#1f9c09] text-white border-none text-lg font-bold px-7 py-3 h-auto rounded-xl min-h-0"
                        >
                            View The List
                        </Link>
                    </div>
                </div>

                {/* Right Side: Banner Image Cover */}
                <div className="flex justify-center lg:justify-end w-full lg:w-auto">
                    <Image
                        src={bannerImg}
                        alt="Banner Image"
                        className="h-72 sm:h-80 lg:h-97.5 object-contain drop-shadow-lg"
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;