'use client'
import './globals.css'
import { Raleway } from 'next/font/google'
import NavBar from './components/navbar/Navbar'
import Footer from './components/footer/footer'
import { AuthContextProvider } from '@/app/context/AuthContext'
import { usePathname } from 'next/navigation'
import { Provider } from '@/app/context/AdminContext'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700']
})


export default function RootLayout({ children }) {
  const pathname = usePathname();

  const shouldHideNavAndFooter = pathname === '/login-admin' ||
    pathname === '/admin' ||
    pathname === '/success';

  return (
    <html lang="en">
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
