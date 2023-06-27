'use client'
import './globals.css'
import { Raleway } from 'next/font/google'
import NavBar from './components/navbar/Navbar'
import Footer from './components/footer/footer'
import { AuthContextProvider } from '@/context/AuthContext'
import { usePathname } from 'next/navigation'
import { Provider } from '@/context/AdminContext'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700']
})

import HeadComponet from './Head'

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const shouldHideNavAndFooter = pathname === '/login-admin' ||
    pathname === '/admin' ||
    pathname === '/success';

  return (
    <html lang="en">
      <HeadComponet />
      <body className={raleway.className}>
        <AuthContextProvider>
          <Provider>
            {!shouldHideNavAndFooter && <NavBar />}
            {children}
            {!shouldHideNavAndFooter && <Footer />}
          </Provider>
        </AuthContextProvider>
      </body>
    </html>
  )
}
