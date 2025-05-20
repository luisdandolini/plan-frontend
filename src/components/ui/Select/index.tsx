'use client';

import * as Select from '@radix-ui/react-select';
import { FaChevronDown } from 'react-icons/fa';

const languages = [
  'Todos',
  'Alemão',
  'Aramaico',
  'Árabe',
  'Azerbaijão;',
  'Argelino;',
  'Asturiano;',
  'Awadhi;',
  'Bengali;',
  'Bhojpuri;',
  'Birmanês;',
  'Búlgaro;',
  'Bahasa Melayu;',
  'Canarim',
  'Checo',
  'Coreano',
  'Croata',
  'Dinamarquês',
  'Eslovaco',
  'Esloveno',
  'Estoniano',
];

export default function CustomSelect() {
  return (
    <Select.Root>
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
