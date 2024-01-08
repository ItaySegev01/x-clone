'use client';

import { Inter } from 'next/font/google';
import { RecoilRoot } from 'recoil';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import { NextUIProvider } from '@nextui-org/react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <RecoilRoot>
          <body className={inter.className}>{children}</body>
        </RecoilRoot>
      </SessionProvider>
    </html>
  );
}
