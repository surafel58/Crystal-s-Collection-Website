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
    <div className="container mx-auto px-4 py-20 md:px-6">
      <h1 className="text-4xl font-bold text-white mb-12 tracking-tight">Secure Checkout</h1>
      
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-yellow-500 uppercase tracking-widest border-b border-slate-800 pb-4">Contact Details</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-slate-400">First Name</Label>
                <Input id="firstName" className="bg-slate-900 border-slate-800 text-white focus-visible:ring-yellow-500 rounded-none h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-slate-400">Last Name</Label>
                <Input id="lastName" className="bg-slate-900 border-slate-800 text-white focus-visible:ring-yellow-500 rounded-none h-12" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-400">Phone Number</Label>
              <Input id="phone" className="bg-slate-900 border-slate-800 text-white focus-visible:ring-yellow-500 rounded-none h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-400">Email (Optional)</Label>
              <Input id="email" type="email" className="bg-slate-900 border-slate-800 text-white focus-visible:ring-yellow-500 rounded-none h-12" />
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-10 h-fit border border-slate-800">
          <h2 className="text-xl font-bold mb-8 text-white uppercase tracking-widest">Order Overview</h2>
          <div className="space-y-6 mb-10">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm py-3 border-b border-slate-800">
                <span className="text-slate-300">{item.name} <span className="text-slate-500 ml-2">x {item.quantity}</span></span>
                <span className="font-medium text-white">{(item.price * item.quantity).toLocaleString()} ETB</span>
              </div>
            ))}
            <div className="pt-4 flex justify-between font-bold text-xl text-yellow-500">
              <span>Total</span>
              <span>{subtotal.toLocaleString()} ETB</span>
            </div>
          </div>
          
          <div className="mt-8">
            <Button 
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold uppercase tracking-widest rounded-none h-14" 
              onClick={handlePlaceOrder}
            >
              Confirm Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

