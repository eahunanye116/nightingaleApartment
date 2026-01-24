import Image from 'next/image';

export function Logo() {
  return (
    <Image 
      src="https://i.postimg.cc/25p3LZdP/logo-22-1-removebg-preview.png"
      alt="Nightingale Apartments Logo"
      width={200}
      height={48}
      priority
    />
  );
}
