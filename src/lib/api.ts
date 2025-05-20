export interface Country {
  cca2: string;
  region: string;
  subregion?: string;
  capital?: string[];
  name: { common: string; official: string };
  translations?: { por?: { common: string; official: string } };
  flags: { svg: string };
  languages?: Record<string, string>;
  population?: number;
  currencies?: Record<string, { name: string; symbol: string }>;
}

const FIELDS =
  'name,translations,cca2,region,subregion,capital,flags,languages,population,currencies';

export async function fetchCountries(): Promise<Country[]> {
  const res = await fetch(`https://restcountries.com/v3.1/all?fields=${FIELDS}`, {
    next: { revalidate: 86_400 },
  });
  if (!res.ok) throw new Error('REST Countries offline');
  return res.json();
}

export async function fetchCountryByCode(code: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=name,capital,region,translations,flags,languages,population,currencies,subregion`,
    { next: { revalidate: 86_400 } },
  );
  if (!res.ok) throw new Error('REST Countries offline');
  return await res.json();
}
