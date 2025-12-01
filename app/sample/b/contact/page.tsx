import MapEmbed from '@/components/shared/MapEmbed';
import { siteConfig } from '@/lib/data';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-10 space-y-8 bg-stone-50">
            <div className="space-y-4">
              <h1 className="text-3xl font-serif text-stone-800">Get in Touch</h1>
              <p className="text-stone-600">
                We are here to help you find your perfect scent or skincare routine.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <Phone className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-900">Call Us</h3>
                  <p className="text-stone-600 text-sm">{siteConfig.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <Mail className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-900">Social Media</h3>
                  <p className="text-stone-600 text-sm">{siteConfig.contact.instagram}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <MapPin className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-medium text-stone-900">Visit Our Boutique</h3>
                  <p className="text-stone-600 text-sm">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-full min-h-[400px] bg-stone-200">
            <MapEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}

