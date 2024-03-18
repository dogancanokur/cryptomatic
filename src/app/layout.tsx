import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Fae's Crypto",
  description: "Fae's Crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <main>
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center my-3">
            Fae&apos;s Crypto
          </h2>
          <div className="border-t">
            <div className="bg-background">
              <div className="grid lg:grid-cols-5">
                <div className="col-span-3 lg:col-span-4 lg:border-l">
                  <div className="h-full px-4 py-6 lg:px-8">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Toaster />
        <footer className="bg-white border-t bottom-0 fixed py-6 w-full">
          <p className="text-center">
            <a href="https://github.com/dogancanokur">made by faecon - 2024</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
