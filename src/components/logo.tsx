import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="https://i.postimg.cc/y604MvVx/logo.png"
      alt="Nightingale Logo"
      width={150}
      height={40}
      className="object-contain brightness-0 invert"
    />
  );
}
