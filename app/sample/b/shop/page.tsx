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
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-6 border-b border-stone-200">
        <div>
          <h1 className="text-4xl font-serif text-stone-800 mb-2">The Collection</h1>
          <p className="text-stone-500">Discover our hand-picked favorites.</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/sample/b/shop">
            <Button variant={!category ? "default" : "outline"} className={!category ? "bg-stone-800 text-white hover:bg-stone-700" : "border-stone-300 text-stone-600"}>All</Button>
          </Link>
          <Link href="/sample/b/shop?category=perfume">
             <Button variant={category === 'perfume' ? "default" : "outline"} className={category === 'perfume' ? "bg-stone-800 text-white hover:bg-stone-700" : "border-stone-300 text-stone-600"}>Perfumes</Button>
          </Link>
          <Link href="/sample/b/shop?category=skincare">
             <Button variant={category === 'skincare' ? "default" : "outline"} className={category === 'skincare' ? "bg-stone-800 text-white hover:bg-stone-700" : "border-stone-300 text-stone-600"}>Skincare</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <Link href={`/sample/b/product/${product.id}`} key={product.id} className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-square bg-stone-50 rounded-lg overflow-hidden mb-4">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1">
               <p className="text-xs font-bold tracking-wide text-amber-700 uppercase">{product.category}</p>
               <h3 className="text-lg font-serif text-stone-900">{product.name}</h3>
               <p className="text-stone-600 font-medium">{product.price.toLocaleString()} ETB</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

