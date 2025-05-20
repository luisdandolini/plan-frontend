'use client';

import * as Checkbox from '@radix-ui/react-checkbox';
import { FaCheck } from 'react-icons/fa';

export default function CustomCheckbox({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox.Root
        className="flex h-[25px] w-[25px] items-center justify-center rounded-[10px] border-[3px] border-white bg-[#F58220] data-[state=unchecked]:bg-transparent transition-colors"
        id={label}
      >
        <Checkbox.Indicator>
          <FaCheck className="text-white text-[10px]" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor={label} className="text-black font-semibold italic text-base cursor-pointer">
        {label}
      </label>
    </div>
  );
}
