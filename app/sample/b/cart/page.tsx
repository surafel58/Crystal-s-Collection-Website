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
      <div className="container mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="text-3xl font-serif text-stone-800">Your Cart is Empty</h1>
        <Button asChild className="rounded-full bg-stone-800 text-white">
          <Link href="/sample/b/shop">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <h1 className="text-4xl font-serif text-stone-800 mb-10">Shopping Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-6 p-6 bg-white rounded-xl shadow-sm">
              <div className="relative h-28 w-28 bg-stone-50 rounded-lg overflow-hidden flex-shrink-0">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between">
                  <h3 className="font-serif text-lg text-stone-900">{item.name}</h3>
                  <p className="font-medium text-stone-800">{item.price.toLocaleString()} ETB</p>
                </div>
                <p className="text-sm text-stone-500 capitalize">{item.category}</p>
                <div className="flex items-center justify-between mt-4">
                   <div className="flex items-center bg-stone-50 rounded-full px-2 py-1">
                     <button 
                       onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                       className="p-2 hover:bg-stone-200 rounded-full transition-colors"
                     >
                       <Minus className="h-3 w-3" />
                     </button>
                     <span className="px-4 text-sm font-medium">{item.quantity}</span>
                     <button 
                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
                       className="p-2 hover:bg-stone-200 rounded-full transition-colors"
                     >
                       <Plus className="h-3 w-3" />
                     </button>
                   </div>
                   <button 
                     onClick={() => removeItem(item.id)}
                     className="text-sm text-red-400 hover:text-red-600 transition-colors flex items-center gap-1"
                   >
                     <Trash2 className="h-3 w-3" /> Remove
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 sticky top-24">
            <h2 className="text-xl font-serif font-bold mb-6 text-stone-800">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-stone-600">Subtotal</span>
                <span className="font-medium">{subtotal.toLocaleString()} ETB</span>
              </div>
              <div className="flex justify-between text-stone-500 text-sm">
                <span>Shipping</span>
                <span>Calculated next step</span>
              </div>
              <div className="border-t border-stone-100 pt-4 flex justify-between font-bold text-lg text-stone-900">
                <span>Total</span>
                <span>{subtotal.toLocaleString()} ETB</span>
              </div>
            </div>
            <Button asChild className="w-full rounded-full bg-amber-800 hover:bg-amber-900 text-white py-6 text-lg shadow-lg shadow-amber-900/20">
              <Link href="/sample/b/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

