import React from 'react'
import ParticlesBackrgound from "./_components/ParticlesBackrgound";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";


const noto_serif_jp = Noto_Serif_JP({ subsets: ["latin"], variable: '--font-noto-serif' })

export const metadata = {
  metadataBase: new URL("https://central-christmas.vercel.app"),
  title: {
    template: "%s | 中部百貨店クリスマスイベント",
    default: "中部百貨店クリスマスイベント",
  },
  description: "中部百貨店のクリスマスイベントの告知サイトです。",
  openGraph: {
    title: "中部百貨店クリスマスイベント",
    description: "中部百貨店のクリスマスイベントの告知サイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://central-christmas.vercel.app",
  },
};

const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

export default async function RootLayout({ children }) {
  await sleep(3000);
  return (
    <html lang="ja" className={`${noto_serif_jp.variable}`}>
      <body>
        <ParticlesBackrgound>
        {children}
        </ParticlesBackrgound>
      </body>
    </html>
  );
}
