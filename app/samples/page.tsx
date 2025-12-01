import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SamplesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Crystal's Collection</h1>
          <p className="text-xl text-muted-foreground">Select a design sample to view</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Sample A: Minimal Luxury</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-white border border-gray-100 rounded-md flex items-center justify-center mb-4">
                <span className="text-gray-300">White Boutique Preview</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Minimalist design with airy layout, plenty of whitespace, and soft shadows. Focus on clean aesthetics.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/sample/a">View Sample A</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Sample B: Warm & Premium</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-[#fcfbf7] border border-stone-200 rounded-md flex items-center justify-center mb-4">
                <span className="text-stone-400">Warm Neutrals Preview</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Warm neutral tones with soft gold accents. A friendly yet premium marketplace feel.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-stone-800 hover:bg-stone-700">
                <Link href="/sample/b">View Sample B</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Sample C: Dark Luxury</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-slate-900 border border-slate-800 rounded-md flex items-center justify-center mb-4">
                <span className="text-slate-600">Dark Charcoal Preview</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Dark charcoal aesthetics with gold highlights. High-contrast, perfume-focused luxury style.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-slate-900 hover:bg-slate-800">
                <Link href="/sample/c">View Sample C</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

