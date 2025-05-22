import Image from 'next/image';

import Logo from '@/assets/tuwaLogo.svg';
import { Link } from '@/components/Link';

export function Header() {
  return (
    <header className="p-4 bg-dark-main flex">
      <div>
        <Link href="/" className="hover:opacity-75 transition">
          <Image width="70" height="70" src={Logo} alt="TUWA" />
        </Link>
      </div>
    </header>
  );
}
