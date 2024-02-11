import React from 'react';
import { Background } from './components/background/Background';
import { NavbarTwoColumns } from './components/navigation/NavbarTwoColumns';
import { Logo } from './templates/Logo';
import { Banner } from './templates/Banner';
import { Footer } from './templates/Footer';
import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: { absolute: 'RED ISAPRES | ATENCIÓN PERSONALIZADA',
    template: '%s  |  Red Isapres',
    default: 'Red Isapres'},
  description: 'Planes de Isapre: Colena, Banmédica, Consalud, Esencial, Más Vida y Vida Trés. Te ofrecemos las más conveniente, mejor salud por el mismo 7%',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
      {/* <Meta title={title} description={description} />z */}
      <Background color="bg-background text-foreground">
        <div>
          <NavbarTwoColumns logo={<Logo xl />}>
            <div id='top'></div> {/* just for href=#top  {children}*/}
          </NavbarTwoColumns>
        {children}
        </div>
      </Background>
      <Banner />
      <Footer />
    </div>
        
        </body>
    </html>
  )
}
