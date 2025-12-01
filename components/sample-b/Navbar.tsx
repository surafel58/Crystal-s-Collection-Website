'use client';

import Link from 'next/link';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fcfbf7] border-b border-stone-200">
      <div className="container mx-auto px-4 py-4 md:px-6 flex flex-col items-center gap-4">
        {/* Top Row */}
        <div className="w-full flex items-center justify-between">
           <div className="flex items-center gap-4 md:hidden">
             <Button variant="ghost" size="icon" className="text-stone-600">
               <Menu className="h-5 w-5" />
             </Button>
           </div>

           <div className="hidden md:flex items-center gap-4 text-stone-500">
             <span className="text-xs tracking-wide">EST. 2023</span>
           </div>

           <Link href="/sample/b" className="font-serif text-2xl md:text-3xl tracking-wide text-stone-800">
             CRYSTAL'S
           </Link>

           <div className="flex items-center gap-2">
             <Button variant="ghost" size="icon" className="text-stone-600">
               <User className="h-5 w-5" />
             </Button>
             <Link href="/sample/b/cart">
               <Button variant="ghost" size="icon" className="relative text-stone-600">
                 <ShoppingBag className="h-5 w-5" />
                 {itemCount > 0 && (
                   <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-700 text-[10px] font-bold text-white">
                     {itemCount}
                   </span>
                 )}
               </Button>
             </Link>
           </div>
        </div>
        
        {/* Navigation Row */}
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-stone-600">
          <Link href="/sample/b" className="hover:text-amber-700 transition-colors">HOME</Link>
          <Link href="/sample/b/shop" className="hover:text-amber-700 transition-colors">SHOP</Link>
          <Link href="/sample/b/about" className="hover:text-amber-700 transition-colors">STORY</Link>
          <Link href="/sample/b/contact" className="hover:text-amber-700 transition-colors">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}

