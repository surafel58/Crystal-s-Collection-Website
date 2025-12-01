import MapEmbed from '@/components/shared/MapEmbed';
import { siteConfig } from '@/lib/data';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
           <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase">Concierge</span>
           <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 p-8 text-center border border-slate-800 hover:border-yellow-500/50 transition-colors group">
            <Phone className="h-8 w-8 text-yellow-500 mx-auto mb-6" />
            <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-widest">Phone</h3>
            <p className="text-slate-400 group-hover:text-white transition-colors">{siteConfig.contact.phone}</p>
          </div>
          
          <div className="bg-slate-900 p-8 text-center border border-slate-800 hover:border-yellow-500/50 transition-colors group">
            <Mail className="h-8 w-8 text-yellow-500 mx-auto mb-6" />
            <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-widest">Instagram</h3>
            <p className="text-slate-400 group-hover:text-white transition-colors">{siteConfig.contact.instagram}</p>
          </div>

          <div className="bg-slate-900 p-8 text-center border border-slate-800 hover:border-yellow-500/50 transition-colors group">
            <MapPin className="h-8 w-8 text-yellow-500 mx-auto mb-6" />
            <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-widest">Location</h3>
            <p className="text-slate-400 group-hover:text-white transition-colors">Addis Ababa, Ethiopia</p>
          </div>
        </div>

        <div className="bg-slate-900 p-4 border border-slate-800">
           <MapEmbed />
        </div>
      </div>
    </div>
  );
}

