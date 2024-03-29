// RootLayout.jsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Masyhudi Affandi | Portofolio',
  description: 'Generated by create next app',
  keywords: 'Masyhudi, Affandi, Portofolio, Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Render Font Awesome stylesheet */}
        <link
          rel="stylesheet"
          href="https://kit.fontawesome.com/cff8b87f33.js"
          crossOrigin="anonymous"
        />
        {/* Render Google Fonts stylesheet */}
        <style>{`@font-face {${inter.style}}`}</style>
        <meta name='keywords' content='Masyhudi, Affandi, Portofolio, Portfolio'/>
      </head>
      <body className={`${inter.className} h-[600vh] bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        {children}
      </body>
    </html>
  )
}
