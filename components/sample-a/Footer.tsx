import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import { Instagram, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider">CRYSTALS</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/sample/a/shop" className="hover:text-black">All Products</Link></li>
              <li><Link href="/sample/a/shop?category=perfume" className="hover:text-black">Perfumes</Link></li>
              <li><Link href="/sample/a/shop?category=skincare" className="hover:text-black">Skincare</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/sample/a/about" className="hover:text-black">About Us</Link></li>
              <li><Link href="/sample/a/contact" className="hover:text-black">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a 
                  href={`https://instagram.com/${siteConfig.contact.instagram.replace('@', '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-black transition-colors flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  {siteConfig.contact.instagram}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} 
                  className="hover:text-black transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

