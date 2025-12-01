'use client';

import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function CheckoutPage() {
  const { items } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order Placed Successfully!", {
      description: "Thank you for your purchase. We will contact you shortly."
    });
  };

  if (!mounted) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <h1 className="text-3xl font-serif text-stone-800 mb-10">Secure Checkout</h1>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8 bg-white p-8 rounded-xl shadow-sm">
          <div className="space-y-6">
            <h2 className="text-xl font-serif font-semibold border-b pb-2">Contact Information</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-stone-600">First Name</Label>
                <Input id="firstName" className="bg-stone-50 border-stone-200 focus-visible:ring-amber-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-stone-600">Last Name</Label>
                <Input id="lastName" className="bg-stone-50 border-stone-200 focus-visible:ring-amber-700" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-stone-600">Phone Number</Label>
              <Input id="phone" className="bg-stone-50 border-stone-200 focus-visible:ring-amber-700" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-stone-600">Email (Optional)</Label>
              <Input id="email" type="email" className="bg-stone-50 border-stone-200 focus-visible:ring-amber-700" />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm h-fit border border-amber-100/50">
          <h2 className="text-xl font-serif font-bold mb-6 text-stone-800">Your Order</h2>
          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm py-2 border-b border-stone-50">
                <span>{item.name} <span className="text-stone-400">x {item.quantity}</span></span>
                <span className="font-medium">{(item.price * item.quantity).toLocaleString()} ETB</span>
              </div>
            ))}
            <div className="pt-4 flex justify-between font-bold text-lg text-amber-900">
              <span>Total</span>
              <span>{subtotal.toLocaleString()} ETB</span>
            </div>
          </div>
          
          <div className="mt-8">
            <Button 
              className="w-full bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-lg h-12" 
              onClick={handlePlaceOrder}
            >
              Complete Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

