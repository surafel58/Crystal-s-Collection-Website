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
      <div className="container mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
        <p className="text-gray-500">Looks like you haven't added anything yet.</p>
        <Button asChild className="rounded-none bg-black text-white">
          <Link href="/sample/a/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {items.map((item) => (
            <div key={item.id} className="flex gap-6 py-6 border-b">
              <div className="relative h-24 w-24 bg-gray-100 flex-shrink-0">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="font-medium">{item.price.toLocaleString()} ETB</p>
                </div>
                <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                <div className="flex items-center justify-between mt-4">
                   <div className="flex items-center border">
                     <button 
                       onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                       className="p-2 hover:bg-gray-100"
                     >
                       <Minus className="h-3 w-3" />
                     </button>
                     <span className="px-4 text-sm">{item.quantity}</span>
                     <button 
                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
                       className="p-2 hover:bg-gray-100"
                     >
                       <Plus className="h-3 w-3" />
                     </button>
                   </div>
                   <button 
                     onClick={() => removeItem(item.id)}
                     className="text-sm text-red-500 hover:underline flex items-center gap-1"
                   >
                     <Trash2 className="h-3 w-3" /> Remove
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-8">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{subtotal.toLocaleString()} ETB</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{subtotal.toLocaleString()} ETB</span>
              </div>
            </div>
            <Button asChild className="w-full rounded-none bg-black text-white py-6 text-lg">
              <Link href="/sample/a/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

