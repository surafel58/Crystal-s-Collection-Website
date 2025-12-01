export default function MapEmbed() {
  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden relative">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.538354663486!2d38.7863633!3d9.0144572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a912555555%3A0x1234567890abcdef!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      ></iframe>
      <div className="absolute bottom-4 left-4 bg-white p-4 rounded shadow-md">
        <p className="font-bold">Crystal's Collection</p>
        <a href="https://maps.app.goo.gl/q2FhEApgFKufioAM6" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-sm">
          View on Google Maps
        </a>
      </div>
    </div>
  );
}

