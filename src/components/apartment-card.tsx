import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Users, Star, MapPin } from "lucide-react";
import type { Apartment } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function ApartmentCard({ apartment }: { apartment: Apartment }) {
  return (
    <Link href={`/apartments/${apartment.id}`}>
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="relative p-0">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <Image
              src={apartment.images?.[0] || 'https://picsum.photos/seed/default/800/600'}
              alt={apartment.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="apartment room"
            />
          </div>
          <Badge className="absolute right-4 top-4 bg-primary/90 text-primary-foreground backdrop-blur-sm">
            ${apartment.pricePerNight} / night
          </Badge>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col p-6">
          <CardTitle className="font-headline text-2xl">
            {apartment.name}
          </CardTitle>
          <div className="mt-2 flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1.5 h-4 w-4" />
            <span>{apartment.location}</span>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <span className="ml-1.5 font-bold">{apartment.rating.toFixed(1)}</span>
            <span className="ml-1 text-muted-foreground">({apartment.reviews} reviews)</span>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center" title={`${apartment.guests} guests`}>
                <Users className="mr-1.5 h-4 w-4" />
                <span>{apartment.guests}</span>
              </div>
              <div className="flex items-center" title={`${apartment.bedrooms} bedrooms`}>
                <BedDouble className="mr-1.5 h-4 w-4" />
                <span>{apartment.bedrooms}</span>
              </div>
              <div className="flex items-center" title={`${apartment.baths} bathrooms`}>
                <Bath className="mr-1.5 h-4 w-4" />
                <span>{apartment.baths}</span>
              </div>
            </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
