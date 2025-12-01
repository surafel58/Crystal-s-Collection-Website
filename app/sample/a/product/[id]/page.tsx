'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
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
    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative aspect-4/5 bg-gray-100">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover"
          />
        </div>
        <div className="space-y-8 flex flex-col justify-center">
          <div>
             <span className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</span>
             <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{product.name}</h1>
             <p className="text-2xl font-medium text-gray-900">{product.price.toLocaleString()} ETB</p>
          </div>
          
          <p className="text-gray-600 leading-relaxed text-lg">
            {product.description}
          </p>

          <div className="pt-6 border-t">
            <Button onClick={handleAddToCart} size="lg" className="w-full md:w-auto px-12 rounded-none bg-black hover:bg-gray-800">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

