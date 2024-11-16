import React from 'react'
import { Suspense } from 'react'
import Loading from './loading';
import ParticlesBackrgound from "./_components/ParticlesBackrgound";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";


const noto_serif_jp = Noto_Serif_JP({ subsets: ["latin"], variable: '--font-noto-serif' })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${noto_serif_jp.variable}`}>
      <body>
      <Suspense fallback={<Loading />}>
        <ParticlesBackrgound>
        {children}
        </ParticlesBackrgound>
        </Suspense>
      </body>
    </html>
  );
}
