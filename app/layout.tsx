import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
    <html lang="en">
      <body className={inter.className}>
        <main>
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
