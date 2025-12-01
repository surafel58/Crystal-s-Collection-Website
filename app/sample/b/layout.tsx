import Navbar from '@/components/sample-b/Navbar';
import Footer from '@/components/sample-b/Footer';
import { Toaster } from '@/components/ui/sonner';

export default function SampleBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcfbf7] font-sans antialiased text-stone-800">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster richColors />
    </div>
  );
}

