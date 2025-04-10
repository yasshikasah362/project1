// app/layout.tsx
import './globals.css';
import { Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';

const playfair = Playfair_Display({
  weight: ['600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Healthy Lifestyle Food',
  description: 'Eat fresh. Live healthy. Discover wholesome foods that fuel your life.',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
