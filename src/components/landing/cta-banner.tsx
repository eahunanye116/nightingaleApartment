import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="bg-muted py-12">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-lg bg-card p-8 sm:flex-row">
          <h2 className="text-center font-semibold sm:text-left">
            Speak to us about your reservation plan, we're here to help.
          </h2>
          <Button size="lg">Chat with us</Button>
        </div>
      </div>
    </section>
  );
}
