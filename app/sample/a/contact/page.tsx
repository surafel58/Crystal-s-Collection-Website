import MapEmbed from '@/components/shared/MapEmbed';
import { siteConfig } from '@/lib/data';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-600">
            We'd love to hear from you. Visit our store or get in touch with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50">
            <Phone className="h-6 w-6" />
            <h3 className="font-semibold">Phone</h3>
            <p className="text-sm text-gray-600">{siteConfig.contact.phone}</p>
          </div>
          <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50">
            <Mail className="h-6 w-6" />
            <h3 className="font-semibold">Instagram</h3>
            <p className="text-sm text-gray-600">{siteConfig.contact.instagram}</p>
          </div>
          <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50">
            <MapPin className="h-6 w-6" />
            <h3 className="font-semibold">Location</h3>
            <p className="text-sm text-gray-600">Addis Ababa, Ethiopia</p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Find Us</h2>
          <MapEmbed />
        </div>
      </div>
    </div>
  );
}

