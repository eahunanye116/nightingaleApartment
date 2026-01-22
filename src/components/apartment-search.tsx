"use client";

import { useState, useMemo, useEffect } from "react";
import type { Apartment, Amenity } from "@/lib/types";
import { allAmenities } from "@/lib/apartments";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ApartmentCard } from "@/components/apartment-card";
import { Button } from "./ui/button";
import { refineSearchQuery } from "@/ai/flows/ai-assisted-search-query-refinement";
import { Loader2, Sparkles } from "lucide-react";

export function ApartmentSearch({
  initialApartments,
}: {
  initialApartments: Apartment[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [numGuests, setNumGuests] = useState(1);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const filteredApartments = useMemo(() => {
    return initialApartments.filter((apt) => {
      const matchesQuery =
        !searchQuery ||
        apt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        apt.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice =
        apt.pricePerNight >= priceRange[0] &&
        apt.pricePerNight <= priceRange[1];
      const matchesGuests = apt.guests >= numGuests;
      const matchesAmenities =
        selectedAmenities.length === 0 ||
        selectedAmenities.every((amenity) =>
          apt.amenities.some((a) => a.name === amenity)
        );

      return (
        matchesQuery && matchesPrice && matchesGuests && matchesAmenities
      );
    });
  }, [searchQuery, priceRange, numGuests, selectedAmenities, initialApartments]);

  const handleAmenityChange = (amenityName: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenityName)
        ? prev.filter((name) => name !== amenityName)
        : [...prev, amenityName]
    );
  };

  const getAiSuggestions = async () => {
    setIsAiLoading(true);
    setAiSuggestions([]);
    try {
      const { suggestions } = await refineSearchQuery({ query: searchQuery });
      setAiSuggestions(suggestions);
    } catch (error) {
      console.error("Error getting AI suggestions:", error);
    } finally {
      setIsAiLoading(false);
    }
  };


  if (!mounted) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
      <aside className="space-y-8 lg:col-span-1">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="font-headline text-2xl font-bold">Find your stay</h2>
          <div className="mt-6 space-y-6">
            <div>
              <Label htmlFor="search">Search by name or location</Label>
              <Input
                id="search"
                type="text"
                placeholder="e.g., 'Paris' or 'Loft'"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mt-2"
              />
            </div>
            
            <div className="space-y-2">
               <Button onClick={getAiSuggestions} disabled={isAiLoading} className="w-full" variant="outline">
                {isAiLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                AI Suggestions
              </Button>
              {aiSuggestions.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {aiSuggestions.map((suggestion, index) => (
                    <Button key={index} variant="ghost" size="sm" className="h-auto px-2 py-1 text-xs" onClick={() => setSearchQuery(suggestion)}>
                      {suggestion}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="price">
                Price Range: ₦{priceRange[0]} - ₦{priceRange[1] === 1000 ? '1000+' : priceRange[1]}
              </Label>
              <Slider
                id="price"
                min={0}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value)}
                className="mt-4"
              />
            </div>

            <div>
              <Label htmlFor="guests">Guests</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                value={numGuests}
                onChange={(e) => setNumGuests(Number(e.target.value))}
                className="mt-2"
              />
            </div>

            <div>
              <h3 className="font-semibold">Amenities</h3>
              <div className="mt-4 space-y-3">
                {allAmenities.map((amenity) => (
                  <div key={amenity.name} className="flex items-center">
                    <Checkbox
                      id={amenity.name}
                      checked={selectedAmenities.includes(amenity.name)}
                      onCheckedChange={() => handleAmenityChange(amenity.name)}
                    />
                    <Label htmlFor={amenity.name} className="ml-3 font-normal">
                      {amenity.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      <section className="lg:col-span-3">
        {filteredApartments.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredApartments.map((apt) => (
              <ApartmentCard key={apt.id} apartment={apt} />
            ))}
          </div>
        ) : (
          <div className="flex h-full min-h-[40vh] items-center justify-center rounded-lg border-2 border-dashed bg-card">
            <div className="text-center">
              <h3 className="font-headline text-2xl font-semibold">No apartments found</h3>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your search filters.
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
