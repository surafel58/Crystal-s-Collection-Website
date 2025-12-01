import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import { Instagram, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f5f4f0] border-t border-stone-200 pt-16 pb-8 text-stone-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <Link href="/sample/b" className="font-serif text-2xl text-stone-800">
              Crystal's Collection
            </Link>
            <p className="text-sm leading-loose max-w-xs mx-auto md:mx-0">
              {siteConfig.tagline}. Curating the finest scents and skincare for your daily ritual.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-serif text-lg text-stone-800">Navigate</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/sample/b/shop" className="hover:text-amber-700 transition-colors">Shop All</Link></li>
              <li><Link href="/sample/b/about" className="hover:text-amber-700 transition-colors">Our Story</Link></li>
              <li><Link href="/sample/b/contact" className="hover:text-amber-700 transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg text-stone-800">Visit Us</h4>
            <div className="text-sm leading-loose flex flex-col items-center md:items-start gap-2">
              <span>Addis Ababa, Ethiopia</span>
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} 
                className="hover:text-amber-700 transition-colors flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phone}
              </a>
              <a 
                href={`https://instagram.com/${siteConfig.contact.instagram.replace('@', '')}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-amber-700 transition-colors flex items-center gap-2"
              >
                <Instagram className="h-4 w-4" />
                {siteConfig.contact.instagram}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-stone-200 text-center text-xs tracking-wider opacity-60">
          © {new Date().getFullYear()} CRYSTAL'S COLLECTION
        </div>
      </div>
    </footer>
  );
}

