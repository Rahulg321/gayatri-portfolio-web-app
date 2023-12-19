import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { mulish, philospher } from '@/app/fonts';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import Providers from '@/lib/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Advocate Gayatri Gupta',
  description: 'Portfolio website of Gayatri Gupta',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mulish.variable} ${philospher.variable}`}>
      <body>
        <main className="bg-background">
          <Providers>
            <div className="parent-container">
              <Header />
              {children}
              <Footer />
            </div>
          </Providers>
        </main>
      </body>
    </html>
  );
}
