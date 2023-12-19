import { Mulish, Philosopher } from 'next/font/google';

export const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
  display: 'swap',
});

export const philospher = Philosopher({
  weight: ['400', '700'],
  variable: '--font-philospher',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
