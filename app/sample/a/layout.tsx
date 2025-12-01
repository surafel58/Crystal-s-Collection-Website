import Navbar from '@/components/sample-a/Navbar';
import Footer from '@/components/sample-a/Footer';
import { Toaster } from '@/components/ui/sonner';

export default function SampleALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans antialiased text-gray-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster richColors />
    </div>
  );
}
