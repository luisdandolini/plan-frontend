import CountryDetails from '@/components/CountryDetails';
import { fetchCountryByCode } from '@/lib/api';
import { notFound } from 'next/navigation';

export default async function CountryPage({ params }: { params: { code: string } }) {
  const country = await fetchCountryByCode(params.code);
  if (!country) notFound();
  return <CountryDetails country={country} />;
}
