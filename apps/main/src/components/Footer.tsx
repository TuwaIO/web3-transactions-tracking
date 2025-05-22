'use client';

import Image from 'next/image';

import Logo from '@/assets/tuwaLogo.svg';
import { Link } from '@/components/Link';
import { MainGradient } from '@/components/MainGradient';

const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/TuwaIO/web3-transactions-tracking',
  },
  {
    name: 'NPM',
    href: 'https://github.com/TuwaIO/web3-transactions-tracking/1', // TODO: need change
  },
  {
    name: 'Docs',
    href: 'https://github.com/TuwaIO/web3-transactions-tracking/2', // TODO: need change
  },
];

export function Footer() {
  return (
    <footer className="relative py-[30px]">
      <MainGradient />
      <div className="container mx-auto flex justify-center items-center flex-col">
        <Link href="/" className="mb-4 hover:opacity-75 transition">
          <Image width="110" height="110" src={Logo} alt="TUWA" />
        </Link>
        <ul className="flex justify-center items-center gap-4">
          {socialLinks.map(({ name, href }) => (
            <li key={href}>
              <Link href={href} inNewWindow className="text-white hover:text-yellow-main">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mx-auto flex">
        <div className="h-[1px] bg-white w-full opacity-25 my-4" />
      </div>
      <div className="container mx-auto flex text-white justify-center items-center mt-4">
        <p>© {new Date().getFullYear()} TUWA. All right reserved.</p>
      </div>
    </footer>
  );
}
