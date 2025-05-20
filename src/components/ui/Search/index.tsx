import { useCountryFilters } from '@/store/countryFilters';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  const { search, setSearch } = useCountryFilters();

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Informe o país que deseja conhecer..."
        className="w-full rounded-full border-[3px] border-white px-4 py-2 text-black italic placeholder-black focus:outline-none focus:ring-2 font-semibold focus:ring-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-white w-4 h-4" />
    </div>
  );
}
