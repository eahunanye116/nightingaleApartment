import { Bird } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
       <Bird className="h-8 w-8 text-white" />
       <span className="font-headline text-2xl font-bold text-white">Nightingale</span>
    </div>
  );
}
