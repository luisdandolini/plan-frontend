import Image from 'next/image';
import Logo from '@/assets/logo_plan.webp';
import Search from '@/components/ui/Search';
import CustomSelect from '@/components/ui/Select';
import CustomCheckbox from '@/components/ui/Checkbox';

export default function Header() {
  return (
    <header className="px-[70px] pb-[54px] pt-[52px]">
      <div className="flex items-center justify-between max-w-[1100px]">
        <Image alt="Logo Plan Marketing Digital" src={Logo} />
        <div>
          <div className="flex items-center gap-[20px]">
            <Search />
            <CustomSelect />
          </div>
          <div className="flex items-center gap-[49px] mt-[19px]">
            <CustomCheckbox label="África" />
            <CustomCheckbox label="América do Norte" />
            <CustomCheckbox label="América do Sul" />
            <CustomCheckbox label="Ásia" />
            <CustomCheckbox label="Europa" />
            <CustomCheckbox label="Oceania" />
          </div>
        </div>
      </div>
    </header>
  );
}
