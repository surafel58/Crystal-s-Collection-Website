'use client';

import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/lib/store';
import { toast } from 'sonner';
import { ShoppingBag } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    addItem(product);
    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart.`
    });
  };

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=100&w=2400&auto=format&fit=crop"
            alt="Warm Hero Image"
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-stone-900/10" />
        </div>
        <div className="relative container h-full mx-auto px-4 md:px-6 flex items-center justify-center text-center">
           <div className="max-w-3xl space-y-8 bg-white/80 backdrop-blur-sm p-12 rounded-sm shadow-xl">
             <h1 className="text-5xl md:text-7xl font-serif text-stone-800">
               Nature's Luxury
             </h1>
             <p className="text-xl text-stone-600 font-light">
               Experience the harmony of premium Korean skincare and exquisite fragrances.
             </p>
             <Button asChild size="lg" className="rounded-full bg-amber-800 hover:bg-amber-900 text-white px-10 py-6 text-lg">
               <Link href="/sample/b/shop">Explore Collection</Link>
             </Button>
           </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-amber-700 font-medium tracking-widest text-sm uppercase">Selected for You</span>
          <h2 className="text-4xl font-serif text-stone-800">Curated Essentials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <Link href={`/sample/b/product/${product.id}`} key={product.id} className="group block">
              <div className="relative aspect-[4/5] bg-stone-100 rounded-t-2xl overflow-hidden mb-6 shadow-sm transition-shadow group-hover:shadow-md">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
                   <Button 
                     variant="outline" 
                     className="flex-1 border-stone-800 text-stone-800 hover:bg-stone-100 rounded-full text-xs h-9"
                   >
                     View Details
                   </Button>
                   <Button 
                     className="flex-1 bg-amber-800 hover:bg-amber-900 text-white rounded-full text-xs h-9"
                     onClick={(e) => handleAddToCart(e, product)}
                   >
                     <ShoppingBag className="w-3 h-3 mr-2" />
                     Add
                   </Button>
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-serif text-stone-800 group-hover:text-amber-800 transition-colors">{product.name}</h3>
                <p className="text-amber-700 font-medium">{product.price.toLocaleString()} ETB</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Banner */}
      <section className="bg-[#f0efe9] py-24">
        <div className="container px-4 md:px-6 mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <h2 className="text-4xl font-serif text-stone-800">Authentic Beauty, <br />Timeless Elegance</h2>
             <p className="text-stone-600 leading-loose text-lg">
               We believe in the ritual of self-care. Our collection features only the most authentic perfumes and effective skincare products, sourced directly to ensure premium quality.
             </p>
             <Button asChild variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white rounded-full px-8">
               <Link href="/sample/b/about">Our Philosophy</Link>
             </Button>
          </div>
          <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
             <Image 
               src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=100&w=2400&auto=format&fit=crop"
               alt="Beauty Ritual"
               fill
               className="object-cover"
             />
          </div>
        </div>
      </section>
    </div>
  );
}

