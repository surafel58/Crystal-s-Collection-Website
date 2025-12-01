import Image from 'next/image';
import { siteConfig } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="relative aspect-video w-full bg-gray-100 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=100&w=2400&auto=format&fit=crop" 
            alt="About Crystal's Collection" 
            fill 
            className="object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
             <h2 className="text-2xl font-bold">Our Story</h2>
             <p className="text-gray-600 leading-relaxed">
               Founded in the heart of Addis Ababa, Crystal's Collection began with a simple mission: to bring authentic, high-quality fragrances and premium Korean skincare to Ethiopia. We understand that beauty is personal, and scent is a powerful memory trigger.
             </p>
             <p className="text-gray-600 leading-relaxed">
               Our journey started when we realized the market lacked reliable sources for genuine products. We set out to curate a collection that our customers could trust, focusing on transparency and quality.
             </p>
          </div>
          <div className="space-y-6">
             <h2 className="text-2xl font-bold">Our Promise</h2>
             <p className="text-gray-600 leading-relaxed">
               We guarantee that every product in our store is 100% authentic. We work directly with authorized distributors to ensure that you receive only the best.
             </p>
             <ul className="list-disc list-inside text-gray-600 space-y-2">
               <li>Authentic Designer Perfumes</li>
               <li>Premium Korean Skincare Brands</li>
               <li>Personalized Consultations</li>
               <li>Delivery Across Ethiopia (Coming Soon)</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

