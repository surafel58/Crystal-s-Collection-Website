'use client';

import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/lib/store';
import { toast } from 'sonner';
import { ShoppingCart } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/shared/Motion';

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
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop"
            alt="Dark Luxury Hero"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950" />
        </div>
        <div className="relative container h-full mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center z-10">
           <FadeIn delay={0.2}>
             <span className="text-yellow-500 text-sm font-bold tracking-[0.3em] uppercase mb-6 animate-fade-in block">Exquisite Collection</span>
           </FadeIn>
           <FadeIn delay={0.4}>
             <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight">
               Redefine <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">Luxury</span>
             </h1>
           </FadeIn>
           <FadeIn delay={0.6}>
             <p className="text-lg text-slate-300 mb-10 max-w-xl font-light leading-relaxed">
               Indulge in the artistry of fine fragrances and elite Korean skincare. A curated experience for the discerning few.
             </p>
           </FadeIn>
           <FadeIn delay={0.8}>
             <Button asChild size="lg" className="rounded-sm bg-yellow-500 text-slate-950 hover:bg-yellow-400 px-10 py-6 text-sm font-bold tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]">
               <Link href="/sample/c/shop">Discover Now</Link>
             </Button>
           </FadeIn>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 md:px-6 mx-auto">
        <FadeIn className="flex flex-col items-center text-center mb-16 space-y-4" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">The Selection</h2>
          <div className="h-1 w-20 bg-yellow-600" />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <StaggerItem key={product.id}>
              <Link href={`/sample/c/product/${product.id}`} className="group relative">
                <div className="relative aspect-[3/4] bg-slate-900 overflow-hidden mb-4 border border-slate-800 group-hover:border-yellow-500/50 transition-colors duration-500">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                     <p className="text-yellow-500 text-xs font-bold tracking-widest uppercase mb-2">{product.category}</p>
                     <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                     <div className="flex items-center justify-between mt-4">
                       <p className="text-slate-300">{product.price.toLocaleString()} ETB</p>
                       <Button 
                         size="sm"
                         variant="outline"
                         className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-slate-950 uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:scale-105 active:scale-95"
                         onClick={(e) => handleAddToCart(e, product)}
                       >
                         Add to Cart
                       </Button>
                     </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn className="flex justify-center mt-16" delay={0.4}>
           <Button asChild variant="outline" className="border-slate-700 text-slate-300 hover:bg-yellow-500 hover:text-slate-950 hover:border-yellow-500 rounded-sm px-8 tracking-widest uppercase text-xs h-12 transition-all hover:scale-105 active:scale-95">
             <Link href="/sample/c/shop">View All Collections</Link>
           </Button>
        </FadeIn>
      </section>

      {/* Brand Section */}
      <section className="bg-slate-900 py-24 border-y border-slate-800">
        <div className="container px-4 md:px-6 mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 md:order-1 relative aspect-square bg-slate-950 border border-slate-800 p-4" delay={0.2}>
             <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=100&w=2400&auto=format&fit=crop"
                  alt="Luxury Perfume"
                  fill
                  className="object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </div>
          </FadeIn>
          <FadeIn className="order-1 md:order-2 space-y-8" delay={0.4}>
             <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase">Our Essence</span>
             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
               Uncompromising <br/> <span className="text-slate-500">Quality</span>
             </h2>
             <p className="text-slate-400 leading-relaxed text-lg font-light">
               We traverse the globe to bring you the most distinguished scents and advanced skincare formulations. Crystal's Collection is more than a store; it is a destination for those who seek the exceptional.
             </p>
             <Button asChild className="rounded-sm bg-white text-slate-950 hover:bg-slate-200 px-8 py-6 text-xs font-bold tracking-widest uppercase transition-all hover:scale-105 active:scale-95">
               <Link href="/sample/c/about">Explore The Brand</Link>
             </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

