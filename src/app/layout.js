"use client"
import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={raleway.className}>
        {children}
      </body>
    </html>
  )
}
