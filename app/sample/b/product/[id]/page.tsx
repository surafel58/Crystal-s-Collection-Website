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
    return <div className="container py-20 text-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="bg-white rounded-2xl p-8 shadow-sm grid md:grid-cols-2 gap-12">
        <div className="relative aspect-[4/5] bg-stone-50 rounded-xl overflow-hidden">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-8">
          <div>
             <span className="text-sm font-bold text-amber-700 tracking-wider uppercase">{product.category}</span>
             <h1 className="text-4xl font-serif text-stone-900 mt-2 mb-4">{product.name}</h1>
             <p className="text-3xl font-medium text-stone-800">{product.price.toLocaleString()} ETB</p>
          </div>
          
          <p className="text-stone-600 leading-relaxed text-lg">
            {product.description}
          </p>

          <div className="pt-8 border-t border-stone-100">
            <Button onClick={handleAddToCart} size="lg" className="w-full md:w-auto px-12 rounded-full bg-amber-800 hover:bg-amber-900 text-white font-medium">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

