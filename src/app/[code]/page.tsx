import CountryDetails from '@/components/CountryDetails';
import { fetchCountryByCode } from '@/lib/api';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CountryPage({ params }: Props) {
  const { code } = await params;

  const country = await fetchCountryByCode(code);

  if (!country) notFound();

  return (
    <div className="flex justify-center items-center">
      <CountryDetails country={country} />
    </div>
  );
}
