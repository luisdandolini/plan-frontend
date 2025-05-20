'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '@/assets/logo_plan.webp';
import Search from '@/components/ui/Search';
import CustomSelect from '@/components/ui/Select';
import CustomCheckbox from '@/components/ui/Checkbox';
import { fetchCountries, Country } from '@/lib/api';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const regionMap: Record<string, string> = {
  Africa: 'África',
  Americas: 'Américas',
  Europe: 'Europa',
  Asia: 'Ásia',
  Oceania: 'Oceania',
  Antarctic: 'Antártida',
};

export default function Header() {
  const [regions, setRegions] = useState<string[]>([]);
  const { code } = useParams();

  useEffect(() => {
    fetchCountries().then((countries: Country[]) => {
      const uniqueRegions = Array.from(
        new Set(countries.map((c) => regionMap[c.region] || c.region)),
      );
      setRegions(uniqueRegions);
    });
  }, []);

  return (
    <header className="sm:px-6 pb-[40px] pt-[40px]">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mx-auto gap-6">
        <div className="flex justify-center lg:justify-start">
          <Link href="/">
            <Image alt="Logo Plan Marketing Digital" src={Logo} className="w-[130px] h-auto" />
          </Link>
        </div>

        {!code && (
          <div className="flex flex-col items-center lg:items-start gap-4 w-full">
            <div className="flex flex-col justify-start items-center sm:flex-row gap-4 w-full">
              <Search />
              <CustomSelect />
            </div>

            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-[28px]">
              {regions.map((label) => (
                <CustomCheckbox key={label} label={label} />
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
