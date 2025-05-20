import Image from 'next/image';
import LogoFooter from '@/assets/logo_footer.webp';

export default function Footer() {
  return (
    <footer className="h-[130px] bg-black mt-[75px] flex items-end justify-between px-6 relative pb-[20px]">
      <Image alt="Logo Plan Marketing Digital" src={LogoFooter} className="w-[130px] h-auto" />
      <div>
        <p className="text-white text-[12px]">
          Grupo Plan Marketing (C) Todos os direitos reservados - 2025
        </p>
      </div>
    </footer>
  );
}
