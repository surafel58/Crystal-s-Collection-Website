import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/data';

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
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Shop Collection</h1>
        <div className="flex justify-center gap-6 text-sm font-medium">
          <Link href="/sample/a/shop" className={!category ? "underline underline-offset-4" : "text-gray-500 hover:text-black"}>All</Link>
          <Link href="/sample/a/shop?category=perfume" className={category === 'perfume' ? "underline underline-offset-4" : "text-gray-500 hover:text-black"}>Perfumes</Link>
          <Link href="/sample/a/shop?category=skincare" className={category === 'skincare' ? "underline underline-offset-4" : "text-gray-500 hover:text-black"}>Skincare</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <Link href={`/sample/a/product/${product.id}`} key={product.id} className="group">
            <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden mb-4">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-sm text-gray-500 capitalize mb-1">{product.category}</p>
            <p className="font-semibold">{product.price.toLocaleString()} ETB</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

