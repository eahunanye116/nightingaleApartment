import Image from 'next/image';

export function Logo() {
  return (
    <Image 
      src="https://i.postimg.cc/rptWvTgk/logo-22-(1).jpg"
      alt="Nightingale Apartments Logo"
      width={200}
      height={48}
      priority
    />
  );
}
