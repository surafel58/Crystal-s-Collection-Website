'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
           <Button variant="ghost" size="icon" className="md:hidden text-slate-300 hover:text-white hover:bg-slate-800">
             <Menu className="h-5 w-5" />
           </Button>
           <Link href="/sample/c" className="flex items-center gap-2">
             <Sparkles className="h-5 w-5 text-yellow-500" />
             <span className="font-bold text-xl tracking-[0.2em] uppercase">Crystals</span>
           </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest">
          <Link href="/sample/c" className="text-slate-400 hover:text-yellow-400 transition-colors uppercase">Home</Link>
          <Link href="/sample/c/shop" className="text-slate-400 hover:text-yellow-400 transition-colors uppercase">Collections</Link>
          <Link href="/sample/c/about" className="text-slate-400 hover:text-yellow-400 transition-colors uppercase">Heritage</Link>
          <Link href="/sample/c/contact" className="text-slate-400 hover:text-yellow-400 transition-colors uppercase">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/sample/c/cart">
            <Button variant="ghost" size="icon" className="relative text-slate-300 hover:text-white hover:bg-slate-800">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-bold text-slate-950">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

