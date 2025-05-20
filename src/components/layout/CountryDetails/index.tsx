'use client';

import Image from 'next/image';
import Link from 'next/link';
import africa from '@/assets/africa.webp';
import asia from '@/assets/asia.webp';
import americas from '@/assets/america_do_sul.webp';
import antarctic from '@/assets/america_do_norte.webp';
import europa from '@/assets/europa.webp';
import oceania from '@/assets/oceania.webp';
import { Country } from '@/lib/api';

const regionMap: Record<string, string> = {
  Africa: 'África',
  Americas: 'Américas',
  Europe: 'Europa',
  Asia: 'Ásia',
  Oceania: 'Oceania',
  Antarctic: 'Antártida',
};

const regionImageMap = {
  Africa: africa,
  Americas: americas,
  Europe: europa,
  Asia: asia,
  Oceania: oceania,
  Antarctic: antarctic,
};

function InfoRow({ label, value }: { label: string; value?: string }) {
  return (
    <p className="text-[#707070] text-[18px] leading-7">
      <span className="font-normal">{label}</span>{' '}
      <span className="font-bold">{value || 'Não informado'}</span>
    </p>
  );
}

export default function CountryDetails({ country }: { country: Country }) {
  const regionLabel = regionMap[country.region] ?? country.region;
  const regionImg = regionImageMap[country.region as keyof typeof regionImageMap] ?? africa;
  const nomeEmPortugues = country.translations?.por?.common || country.name.common;
  const nomeOficialEmPortugues = country.translations?.por?.official || country.name.official;

  return (
    <div
      className="w-[1300px] rounded-[20px] relative"
      style={{
        background: 'linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.1) 100%),#fff',
        boxShadow: '0 4px 10px rgba(0,0,0,.2)',
      }}
    >
      <div className="h-[47px] bg-[#58595b] rounded-t-[20px] px-5 flex items-center justify-between mb-6">
        <p className="font-black text-white text-[15px]">{regionLabel}</p>
        <Image src={regionImg} alt={`Ícone da região ${regionLabel}`} />
      </div>

      <div className="flex justify-center gap-12">
        <div className="flex flex-col items-center absolute left-[20px]">
          <Image
            src={country.flags.svg}
            alt={`Bandeira de ${nomeEmPortugues}`}
            width={220}
            height={96}
            className="w-[220px] h-[120px] object-cover px-[20px]"
          />
          <p className="font-bold text-[16px] text-[#707070] mt-2">Bandeira</p>
        </div>

        <div className="flex flex-col justify-center gap-1 text-center">
          <p className="text-[36px] font-bold text-[#707070] mb-3">{nomeEmPortugues}</p>

          <InfoRow label="Nome oficial:" value={nomeOficialEmPortugues} />
          <InfoRow label="Capital:" value={country.capital?.[0]} />
          <InfoRow label="População:" value={country.population?.toLocaleString('pt-BR')} />
          <InfoRow
            label="Moeda:"
            value={
              country.currencies
                ? Object.values(country.currencies)
                    .map((c) => c.name)
                    .join(', ')
                : 'Não informada'
            }
          />
          <InfoRow
            label="Idiomas:"
            value={
              country.languages ? Object.values(country.languages).join(' e ') : 'Não informados'
            }
          />
          <InfoRow label="Região:" value={regionLabel} />
          <InfoRow label="Sub-Região:" value={country.subregion} />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/"
          className="bg-[#F58220] text-white font-bold text-sm rounded-full px-10 py-2 hover:opacity-90 transition mb-[44px] w-[270px] h-[47px] flex items-center justify-center"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}
