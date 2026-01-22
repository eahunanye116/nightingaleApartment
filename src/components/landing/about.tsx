export function About() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[600px] w-full overflow-hidden rounded-lg shadow-xl">
            <video
              src="https://ik.imagekit.io/er5hlmosw/about%20us%20vid.mp4"
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="font-headline text-4xl font-bold md:text-5xl">About Nightingale Apartments</h2>
            <p>
              At Nightingale Apartments, we believe in combining comfort, convenience, and affordability. Our homes are thoughtfully designed and fully furnished - giving you everything you need for a peaceful stay.
            </p>
            <p>
              Each is valued and equipped to meet the latest in high standards, with modern amenities and regular cleaning, to ensure a stable experience from check-in to check-out. Whether you're on business travel, family, or vacation, our friendly team is here to make sure you enjoy your stay with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
