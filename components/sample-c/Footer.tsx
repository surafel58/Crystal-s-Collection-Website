import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import { Sparkles, Instagram, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/sample/c" className="flex items-center gap-2 text-slate-100">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              <span className="font-bold text-xl tracking-[0.2em] uppercase">Crystals</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-slate-500">
              {siteConfig.tagline}. Immerse yourself in the world of luxury fragrances and elite skincare.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-widest">Discover</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/sample/c/shop" className="hover:text-yellow-500 transition-colors">All Collections</Link></li>
              <li><Link href="/sample/c/shop?category=perfume" className="hover:text-yellow-500 transition-colors">Fine Fragrances</Link></li>
              <li><Link href="/sample/c/shop?category=skincare" className="hover:text-yellow-500 transition-colors">Premium Skincare</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold text-slate-100 uppercase tracking-widest">Client Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/sample/c/contact" className="hover:text-yellow-500 transition-colors">Contact Concierge</Link></li>
              <li><Link href="/sample/c/about" className="hover:text-yellow-500 transition-colors">Our Heritage</Link></li>
              <li>
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} 
                  className="text-slate-500 hover:text-yellow-500 transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a 
                  href={`https://instagram.com/${siteConfig.contact.instagram.replace('@', '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-500 hover:text-yellow-500 transition-colors flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  {siteConfig.contact.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Crystal's Collection.</p>
          <p>Addis Ababa, Ethiopia</p>
        </div>
      </div>
    </footer>
  );
}

