'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center space-y-8">
        <h1 className="text-4xl font-bold text-white">Your Cart is Empty</h1>
        <p className="text-slate-400">You have yet to select your luxuries.</p>
        <Button asChild className="rounded-none bg-yellow-500 text-slate-950 hover:bg-yellow-400 px-8 uppercase tracking-widest font-bold">
          <Link href="/sample/c/shop">Browse Collection</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20 md:px-6">
      <h1 className="text-4xl font-bold text-white mb-12 tracking-tight">Shopping Bag</h1>
      
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-8">
          {items.map((item) => (
            <div key={item.id} className="flex gap-8 pb-8 border-b border-slate-800">
              <div className="relative h-32 w-32 bg-slate-900 border border-slate-800 flex-shrink-0">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover opacity-90"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-xl text-white">{item.name}</h3>
                  <p className="font-medium text-slate-200 text-lg">{item.price.toLocaleString()} ETB</p>
                </div>
                <p className="text-xs font-bold text-yellow-600 uppercase tracking-widest">{item.category}</p>
                <div className="flex items-center justify-between mt-6">
                   <div className="flex items-center border border-slate-700">
                     <button 
                       onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                       className="p-2 hover:bg-slate-800 text-slate-400 transition-colors"
                     >
                       <Minus className="h-3 w-3" />
                     </button>
                     <span className="px-4 text-sm font-medium text-white">{item.quantity}</span>
                     <button 
                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
                       className="p-2 hover:bg-slate-800 text-slate-400 transition-colors"
                     >
                       <Plus className="h-3 w-3" />
                     </button>
                   </div>
                   <button 
                     onClick={() => removeItem(item.id)}
                     className="text-xs text-red-500 hover:text-red-400 transition-colors flex items-center gap-2 uppercase tracking-wider font-bold"
                   >
                     <Trash2 className="h-3 w-3" /> Remove
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-slate-900/50 p-8 border border-slate-800">
            <h2 className="text-xl font-bold mb-8 text-white uppercase tracking-widest">Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-slate-400">Subtotal</span>
                <span className="font-medium text-white">{subtotal.toLocaleString()} ETB</span>
              </div>
              <div className="flex justify-between text-slate-500 text-sm">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between font-bold text-xl text-yellow-500">
                <span>Total</span>
                <span>{subtotal.toLocaleString()} ETB</span>
              </div>
            </div>
            <Button asChild className="w-full rounded-none bg-white text-slate-950 hover:bg-yellow-500 py-6 text-sm font-bold tracking-widest uppercase transition-colors">
              <Link href="/sample/c/checkout">Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

