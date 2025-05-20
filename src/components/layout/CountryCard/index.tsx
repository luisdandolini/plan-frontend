import Image, { StaticImageData } from 'next/image';
import africa from '@/assets/africa.webp';
import asia from '@/assets/asia.webp';
import americas from '@/assets/america_do_sul.webp';
import antarctic from '@/assets/america_do_norte.webp';
import europa from '@/assets/europa.webp';
import oceania from '@/assets/oceania.webp';
import capitalIcon from '@/assets/capital.webp';
import Button from '@/components/ui/Button';
import * as Tooltip from '@radix-ui/react-tooltip';

interface CountryCardProps {
  country: string;
  region: string;
  capital: string | undefined;
  flag: string;
}

const regionMap: Record<string, string> = {
  Africa: 'África',
  Americas: 'Américas',
  Europe: 'Europa',
  Asia: 'Ásia',
  Oceania: 'Oceania',
  Antarctic: 'Antártida',
};

const regionImageMap: Record<string, StaticImageData> = {
  Africa: africa,
  Américas: americas,
  Europe: europa,
  Asia: asia,
  Oceania: oceania,
  Antarctic: antarctic,
};

export default function CountryCard({ country, region, capital, flag }: CountryCardProps) {
  return (
    <div
      className="w-[310px] h-[258px] rounded-[20px]"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 100%), white`,
        boxShadow: '0px 4px 10px 0px #00000033',
      }}
    >
      <div className="h-[47px] bg-[#58595b] rounded-t-[20px] px-[20px] flex items-center justify-between">
        <p className="font-black text-white text-[15px]"> {regionMap[region] || region}</p>
        <Image
          alt={`Ícone da região ${regionMap[region] || region}`}
          src={regionImageMap[region] || africa}
        />
      </div>
      <div className="flex flex-col items-center justify-center pt-[21px] pb-[22px]">
        <Image src={flag} className="mb-[10px] h-[18px]" width={24} height={18} alt={country} />
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <p className="font-bold text-[23px] text-[#707070] mb-[12px] text-center truncate max-w-[220px] cursor-default">
                {country}
              </p>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-black text-white px-3 py-1 rounded-md text-sm"
                side="top"
                align="center"
              >
                {country}
                <Tooltip.Arrow className="fill-black" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
        <div className="flex items-center gap-[10px] mb-[22px]">
          <Image alt="Logo Plan Marketing Digital" src={capitalIcon} />
          <p className="text-[#707070] font-bold text-[18px]">{capital}</p>
        </div>
        <div className="w-full px-[20px]">
          <Button className="w-full h-[47px]">Ver mais</Button>
        </div>
      </div>
    </div>
  );
}
