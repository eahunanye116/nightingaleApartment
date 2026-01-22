import Image from 'next/image';

export function Logo() {
  return (
    <Image 
      src="https://i.postimg.cc/LsTgHt8c/Chat-GPT-Image-Jan-22-2026-10-17-26-PM.png" 
      alt="Nightingale Apartments Logo"
      width={100} 
      height={100}
      className="rounded-md"
    />
  );
}
