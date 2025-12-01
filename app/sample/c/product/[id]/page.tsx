'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

export default function ProductPage() {
  const params = useParams();
  const addItem = useCartStore((state) => state.addItem);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div className="container py-20 text-center text-white">Product not found</div>;
  }

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart`, {
      className: 'bg-slate-900 text-white border-slate-800',
    });
  };

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 py-20 md:px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] bg-slate-900 border border-slate-800">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover opacity-90"
          />
        </div>
        <div className="space-y-10">
          <div className="space-y-4">
             <div className="flex items-center gap-4">
                <div className="h-[1px] w-10 bg-yellow-500"></div>
                <span className="text-sm font-bold text-yellow-500 tracking-[0.2em] uppercase">{product.category}</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">{product.name}</h1>
             <p className="text-3xl font-light text-slate-300">{product.price.toLocaleString()} ETB</p>
          </div>
          
          <p className="text-slate-400 leading-loose text-lg border-y border-slate-800 py-8">
            {product.description}
          </p>

          <div className="pt-4">
            <Button onClick={handleAddToCart} size="lg" className="w-full md:w-auto px-12 py-8 text-sm font-bold tracking-widest uppercase rounded-none bg-white text-slate-950 hover:bg-yellow-500 transition-colors">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

