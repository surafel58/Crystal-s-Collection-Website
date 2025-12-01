import Image from 'next/image';
import { siteConfig } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-700 font-medium tracking-widest uppercase text-sm">Our Philosophy</span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-800 mt-4 mb-6">Beauty in Harmony</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
           <div className="relative aspect-[3/4] rounded-t-full overflow-hidden bg-stone-100">
             <Image 
               src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=100&w=2400&auto=format&fit=crop"
               alt="Natural Ingredients"
               fill
               className="object-cover"
             />
           </div>
           <div className="space-y-6">
             <h2 className="text-3xl font-serif text-stone-800">Curated with Care</h2>
             <p className="text-stone-600 leading-loose">
               Crystal's Collection was born from a passion for exquisite fragrances and the transformative power of Korean skincare. We believe that self-care is a daily ritual that should be cherished.
             </p>
             <p className="text-stone-600 leading-loose">
               We meticulously select each product in our store, ensuring that it meets our high standards for authenticity and efficacy. Our goal is to bring the world's finest beauty secrets to your doorstep in Ethiopia.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}

