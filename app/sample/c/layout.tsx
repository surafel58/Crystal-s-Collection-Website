import Navbar from '@/components/sample-c/Navbar';
import Footer from '@/components/sample-c/Footer';
import { Toaster } from '@/components/ui/sonner';

export default function SampleCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans antialiased text-slate-100 selection:bg-yellow-500/30 selection:text-yellow-200">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster richColors />
    </div>
  );
}

