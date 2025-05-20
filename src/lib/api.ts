export interface Country {
  cca2: string;
  name: { common: string; official: string };
  translations?: {
    por?: { common: string; official: string };
  };
  region: string;
  capital?: string[];
  flags: { png: string; svg: string };
}

const FIELDS = 'name,translations,cca2,region,capital,flags';

export async function fetchCountries(): Promise<Country[]> {
  const res = await fetch(`https://restcountries.com/v3.1/all?fields=${FIELDS}`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) throw new Error('REST Countries offline');
  return res.json();
}
