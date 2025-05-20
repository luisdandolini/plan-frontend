'use client';

import { useCountryFilters } from '@/store/countryFilters';
import * as Select from '@radix-ui/react-select';
import { FaChevronDown } from 'react-icons/fa';

export default function CustomSelect() {
  const { language, languages, setLanguage } = useCountryFilters();

  if (languages.length === 0) {
    return <div className="w-[230px] h-[38px] rounded-full bg-white/40 animate-pulse" />;
  }

  return (
    <Select.Root value={language} onValueChange={setLanguage}>
      <Select.Trigger className="flex items-center justify-between w-full rounded-full border-[3px] border-white bg-transparent px-4 py-2 italic font-semibold focus:outline-none focus:ring-2 focus:ring-white">
        <Select.Value placeholder="Selecione o idioma" />
        <Select.Icon>
          <FaChevronDown className="text-white" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          side="bottom"
          sideOffset={4}
          position="popper"
          className="z-50 w-[280px] rounded-2xl bg-[#F58220] text-white shadow-xl border-2 border-white"
        >
          <Select.Viewport className="max-h-64 overflow-y-auto px-3 py-2 text-sm italic">
            <div className="pb-1 font-bold not-italic text-black">Selecione o idioma</div>

            {languages.map((lang) => (
              <Select.Item
                key={lang}
                value={lang}
                className="cursor-pointer px-2 py-1 outline-none text-white hover:bg-orange-600 focus:bg-orange-600 data-[state=checked]:bg-orange-700 rounded-sm"
              >
                <Select.ItemText>• {lang}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
