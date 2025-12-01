'use client';

import Link from 'next/link';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/sample/a" className="flex flex-col items-start leading-none group">
            <span className="font-bold text-2xl tracking-widest group-hover:text-gray-600 transition-colors">CRYSTAL'S</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 group-hover:text-black transition-colors">Collection</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/sample/a" className="hover:text-black transition-colors">HOME</Link>
          <Link href="/sample/a/shop" className="hover:text-black transition-colors">SHOP</Link>
          <Link href="/sample/a/about" className="hover:text-black transition-colors">ABOUT</Link>
          <Link href="/sample/a/contact" className="hover:text-black transition-colors">CONTACT</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-gray-500" />
            <span className="sr-only">Search</span>
          </Button>
          <Link href="/sample/a/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5 text-gray-500" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

