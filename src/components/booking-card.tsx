"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format, differenceInDays } from 'date-fns';
import { Calendar as CalendarIcon, Send } from "lucide-react";
import type { DateRange } from "react-day-picker";
import type { Apartment } from "@/lib/types";

import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

function ContactHostForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "The host has been notified and will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Ask a question about the apartment..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          <Send className="mr-2 h-4 w-4" /> Send Message
        </Button>
      </form>
    </Form>
  );
}


export function BookingCard({ apartment }: { apartment: Apartment }) {
  const { toast } = useToast();
  const [date, setDate] = useState<DateRange | undefined>();

  const nights = date?.from && date?.to ? differenceInDays(date.to, date.from) : 0;
  const totalCost = nights > 0 ? nights * apartment.pricePerNight : 0;

  const handleReserve = () => {
    if (totalCost > 0) {
      toast({
        title: "Booking Reserved!",
        description: `Your stay for ${nights} nights has been reserved for $${totalCost}.`,
      });
      setDate(undefined);
    } else {
       toast({
        title: "Invalid Dates",
        description: `Please select a valid date range.`,
        variant: "destructive",
      });
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          ${apartment.pricePerNight}{" "}
          <span className="text-base font-normal text-muted-foreground">/ night</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="book">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="book">Book</TabsTrigger>
            <TabsTrigger value="contact">Contact Host</TabsTrigger>
          </TabsList>
          <TabsContent value="book" className="mt-4">
             <div className="grid gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} -{" "}
                          {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick your dates</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={1}
                    disabled={(day) => day < new Date(new Date().setHours(0,0,0,0))}
                  />
                </PopoverContent>
              </Popover>
              {nights > 0 && (
                <div className="space-y-2 rounded-lg border p-4">
                  <div className="flex justify-between">
                    <span>${apartment.pricePerNight} x {nights} nights</span>
                    <span>${totalCost}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${totalCost}</span>
                  </div>
                </div>
              )}
              <Button onClick={handleReserve} size="lg" className="w-full text-lg">
                Reserve
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="contact" className="mt-6">
            <ContactHostForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
