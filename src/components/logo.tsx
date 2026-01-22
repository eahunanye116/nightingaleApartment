import Image from 'next/image';

export function Logo() {
  return (
    <Image 
      src="https://i.postimg.cc/3wWnpxD5/Whats-App-Image-2026-01-22-at-10-00-35-PM.jpg" 
      alt="Nightingale Apartments Logo"
      width={50} 
      height={50}
      className="rounded-md"
    />
  );
}
