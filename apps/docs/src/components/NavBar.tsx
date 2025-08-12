'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Navbar } from 'nextra-theme-docs';

import Logo from '@/assets/tuwaLogo.svg';
import LogoDark from '@/assets/tuwaLogoWhite.svg';
import NoSSR from '@/components/NoSSR';

export function NavBar() {
  const { resolvedTheme } = useTheme();

  return (
    <Navbar
      logo={
        <NoSSR>
          <Image width={50} height={50} src={resolvedTheme === 'dark' ? LogoDark : Logo} alt="TUWA Logo" />
        </NoSSR>
      }
    />
  );
}
