import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  
  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="container mx-auto px-4 py-20 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-slate-800">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">The Catalogue</h1>
          <p className="text-slate-400 text-lg">Explore our exclusive range of premium goods.</p>
        </div>
        <div className="flex gap-4 mt-6 md:mt-0">
          <Link href="/sample/c/shop">
            <Button variant={!category ? "default" : "outline"} className={!category ? "bg-yellow-500 text-slate-950 hover:bg-yellow-400 border-transparent" : "border-slate-700 text-slate-300 hover:border-yellow-500 hover:text-yellow-500 bg-transparent"}>ALL</Button>
          </Link>
          <Link href="/sample/c/shop?category=perfume">
             <Button variant={category === 'perfume' ? "default" : "outline"} className={category === 'perfume' ? "bg-yellow-500 text-slate-950 hover:bg-yellow-400 border-transparent" : "border-slate-700 text-slate-300 hover:border-yellow-500 hover:text-yellow-500 bg-transparent"}>FRAGRANCE</Button>
          </Link>
          <Link href="/sample/c/shop?category=skincare">
             <Button variant={category === 'skincare' ? "default" : "outline"} className={category === 'skincare' ? "bg-yellow-500 text-slate-950 hover:bg-yellow-400 border-transparent" : "border-slate-700 text-slate-300 hover:border-yellow-500 hover:text-yellow-500 bg-transparent"}>SKINCARE</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredProducts.map((product) => (
          <Link href={`/sample/c/product/${product.id}`} key={product.id} className="group block">
            <div className="relative aspect-square bg-slate-900 overflow-hidden mb-6 border border-slate-800 group-hover:border-yellow-500/30 transition-colors">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur px-3 py-1">
                 <span className="text-yellow-500 text-[10px] font-bold tracking-widest uppercase">{product.category}</span>
              </div>
            </div>
            <div className="space-y-2">
               <h3 className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors">{product.name}</h3>
               <p className="text-slate-400 font-medium">{product.price.toLocaleString()} ETB</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

