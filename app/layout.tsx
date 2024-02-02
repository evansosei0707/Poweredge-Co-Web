import type { Metadata } from 'next'
import './globals.css'
import { headerContactQuery } from './lib/query';
import { client } from './lib/client';
import { Kumbh_Sans, Krona_One } from "next/font/google"
import Header from './Components/Header';
import { Footer } from './Components';

async function getData() {
  const data = await client.fetch(headerContactQuery);

  return data;
}

const krona = Krona_One({
  weight: '400',
  subsets: ["latin", "latin-ext"],
  variable: '--font-krona_one',
})

const kumb = Kumbh_Sans({
  weight: ['100', '200', '400', '600', '700', '800'],
  subsets: ["latin" , "latin-ext" ],
  variable: '--font-kumb',
})

export const metadata: Metadata = {
  title: 'Power Edge Equipment Limited - Leading Mining and Earthmoving Solutions in Africa',
  description:
    'Power Edge Equipment Limited (PEEL) - Your Premier Partner for Comprehensive Mining Solutions in Africa, Offering Parts Supply, Component Rebuild, Equipment Rentals, and Unmatched Expertise in Caterpillar, Komatsu, Liebherr, Atlas Copco, Sandvik, Cummins, P&H, and More.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const headerContactData: headerContactResponse = await getData()

  
  return (
    <html lang="en">
      <body className={`${krona.variable} ${kumb.variable}  max-w-[1500px] bg-[#f4f4fa] `}>
        <Header headerContactData={headerContactData} />
          {children}
        <Footer />
      </body>
    </html>
  )
}
