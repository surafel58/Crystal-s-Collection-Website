'use client';

import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/lib/store';
import { toast } from 'sonner';
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
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
             <div className="container px-4 md:px-6 flex flex-col items-start justify-center h-full z-10">
               <FadeIn delay={0.1}>
                 <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-white border border-gray-200">
                   New Collection
                 </span>
               </FadeIn>
               <FadeIn delay={0.3}>
                 <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-2xl">
                   The Essence of <br /> Pure Beauty
                 </h1>
               </FadeIn>
               <FadeIn delay={0.5}>
                 <p className="text-lg text-gray-600 mb-8 max-w-lg">
                   Discover our curated collection of premium fragrances and Korean skincare designed to reveal your inner radiance.
                 </p>
               </FadeIn>
               <FadeIn delay={0.7}>
                 <Button asChild size="lg" className="rounded-none bg-black text-white hover:bg-gray-800 px-8 transition-transform active:scale-95">
                   <Link href="/sample/a/shop">Shop Now</Link>
                 </Button>
               </FadeIn>
             </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gray-200 hidden md:block">
           {/* Placeholder for hero image */}
           <div className="w-full h-full relative">
             <Image 
               src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=100&w=2400&auto=format&fit=crop"
               alt="Hero Image"
               fill
               className="object-cover opacity-90"
             />
           </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
          <p className="text-gray-500 max-w-md">
            Our most loved products this season.
          </p>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <StaggerItem key={product.id}>
              <Link href={`/sample/a/product/${product.id}`} className="group block">
                <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden mb-4">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button 
                      className="w-full bg-white text-black hover:bg-black hover:text-white shadow-md rounded-none transition-all active:scale-95"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-500">{product.price.toLocaleString()} ETB</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" className="rounded-none border-black hover:bg-black hover:text-white px-8">
            <Link href="/sample/a/shop">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* About / Brand Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center gap-12">
          <FadeIn className="flex-1 relative aspect-square w-full max-w-md bg-gray-200" delay={0.2}>
             <Image 
               src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1000&q=80"
               alt="Brand philosophy"
               fill
               className="object-cover"
             />
          </FadeIn>
          <FadeIn className="flex-1 space-y-6" delay={0.4}>
            <h2 className="text-3xl font-bold tracking-tight">Authentic & Premium</h2>
            <p className="text-gray-600 leading-relaxed">
              At Crystal's Collection, we believe in the power of authenticity. Our perfumes are carefully selected for their unique character, and our Korean skincare range represents the pinnacle of beauty innovation.
            </p>
            <Button asChild variant="link" className="p-0 h-auto text-black underline-offset-4 hover:text-gray-600 transition-colors">
              <Link href="/sample/a/about">Read Our Story</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

