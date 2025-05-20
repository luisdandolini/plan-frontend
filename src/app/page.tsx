'use client';

import { useEffect, useMemo, useState } from 'react';
import { fetchCountries, Country } from '@/lib/api';
import { useCountryFilters } from '@/store/countryFilters';
import CountryCard from '@/components/CountryCard';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import LoadingSpinner from '@/components/ui/Loading';

const ITEMS_PER_PAGE = 8;

const regionMap: Record<string, string> = {
  Africa: 'África',
  Americas: 'Américas',
  Europe: 'Europa',
  Asia: 'Ásia',
  Oceania: 'Oceania',
  Antarctic: 'Antártida',
};

const langPtToEn: Record<string, string> = {
  Alemão: 'German',
  Árabe: 'Arabic',
  Bengali: 'Bengali',
  Português: 'Portuguese',
  Inglês: 'English',
  Espanhol: 'Spanish',
};

export default function Home() {
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { search, language, regions, setLanguages } = useCountryFilters();

  useEffect(() => {
    fetchCountries()
      .then((data) => {
        setAllCountries(data);

        const unique = new Set<string>();
        data.forEach(
          (c) => c.languages && Object.values(c.languages).forEach((l) => unique.add(l)),
        );

        const list = ['Todos', ...Array.from(unique).sort()];
        setLanguages(list);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setLanguages]);

  const filtered = useMemo(() => {
    return allCountries.filter((c) => {
      const regionPt = regionMap[c.region] ?? c.region;
      if (regions.length && !regions.includes(regionPt)) return false;

      if (language && language !== 'Todos') {
        const target = (langPtToEn[language] ?? language).toLowerCase();
        const langs = c.languages ? Object.values(c.languages).map((l) => l.toLowerCase()) : [];
        if (!langs.includes(target)) return false;
      }

      const namePt = (c.translations?.por?.common ?? c.name.common).toLowerCase();
      if (search && !namePt.includes(search.toLowerCase())) return false;

      return true;
    });
  }, [allCountries, regions, language, search]);

  useEffect(() => {
    setCurrentPage(1);
  }, [regions, language, search]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const currentCountries = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <section className="px-6 py-10 mx-auto">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-8">
          {currentCountries.map((country) => (
            <CountryCard
              key={country.cca2}
              country={country.translations?.por?.common ?? country.name.common}
              region={regionMap[country.region] ?? country.region}
              capital={country.capital?.[0]}
              flag={country.flags.svg}
              code={country.cca2}
            />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
          <button
            className="w-[50px] h-[50px] cursor-pointer border-[3px] border-white rounded-[20px] text-white disabled:opacity-50 flex items-center justify-center"
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
            className="w-[50px] h-[50px] cursor-pointer border-[3px] border-white rounded-[20px] text-white disabled:opacity-50 flex items-center justify-center"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <MdKeyboardArrowRight size={22} />
          </button>
        </div>
      )}
    </section>
  );
}
