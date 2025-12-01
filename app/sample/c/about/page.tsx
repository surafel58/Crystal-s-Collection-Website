import Image from 'next/image';
import { siteConfig } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
           <div className="space-y-4">
             <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase">Heritage</span>
             <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
               Defining <br /> Excellence
             </h1>
           </div>
           <p className="text-slate-400 leading-loose text-lg font-light">
             {siteConfig.tagline}. Crystal's Collection was established with a singular vision: to provide an uncompromising selection of the world's finest beauty products to the Ethiopian market.
           </p>
           <p className="text-slate-400 leading-loose text-lg font-light">
             We believe that luxury is an experience, not just a product. From our carefully curated perfume vault to our premium Korean skincare selection, every item represents the pinnacle of quality and authenticity.
           </p>
           <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-800">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
                <p className="text-xs text-yellow-500 uppercase tracking-widest">Authentic</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Premium</h3>
                <p className="text-xs text-yellow-500 uppercase tracking-widest">Quality</p>
              </div>
           </div>
        </div>

        <div className="relative h-[600px] w-full">
           <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 to-purple-500 opacity-20 rounded-sm transform rotate-3 scale-105 blur-xl"></div>
           <div className="relative h-full w-full bg-slate-900 border border-slate-800 overflow-hidden">
             <Image 
               src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=100&w=2400&auto=format&fit=crop"
               alt="About Crystal's Collection"
               fill
               className="object-cover opacity-80"
             />
             <div className="absolute inset-0 bg-slate-950/40"></div>
           </div>
        </div>
      </div>
    </div>
  );
}

