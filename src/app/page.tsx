'use client';

import { useState } from 'react';
import CountryCard from '@/components/layout/CountryCard';
import { Country, fetchCountries } from '@/lib/api';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const ITEMS_PER_PAGE = 8;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [countries, setCountries] = useState<Country[]>([]);

  useState(() => {
    fetchCountries().then(setCountries);
  });

  const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE);

  const currentCountries = countries.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <section className="px-6 py-10 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
        {currentCountries.map((country, index) => (
          <CountryCard
            key={index}
            country={country.translations?.por?.common || country.name.common}
            region={country.region}
            capital={country.capital?.[0]}
            flag={country.flags.svg}
          />
        ))}
      </div>

      <div className="flex justify-center items-center gap-3 mt-10">
        <button
          className="w-[50px] h-[50px] cursor-pointer border-[3px] border-white rounded-[20px] text-white font-bold disabled:opacity-50 flex flex-col items-center justify-center"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          <MdKeyboardArrowLeft size={22} />
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentPage === i + 1 ? 'bg-white' : 'border-white border-[3px]'
            }`}
          />
        ))}

        <button
          className="w-[50px] h-[50px] cursor-pointer border-[3px] border-white rounded-[20px] text-white font-bold disabled:opacity-50 flex flex-col items-center justify-center"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <MdKeyboardArrowRight size={22} />
        </button>
      </div>
    </section>
  );
}
