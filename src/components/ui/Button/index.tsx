'use client';

import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export default function Button({ asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={`bg-[#F58220] text-white font-bold italic rounded-full px-8 py-2 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white ${className}`}
      {...props}
    />
  );
}
