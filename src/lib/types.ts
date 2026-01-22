export interface Amenity {
  name: string;
  iconName: string;
}

export interface Apartment {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  rating: number;
  reviews: number;
  description: string;
  amenities: Amenity[];
  imageIds: string[];
  images?: string[];
  host: {
    name: string;
    avatarId: string;
    avatar?: string;
  };
}
