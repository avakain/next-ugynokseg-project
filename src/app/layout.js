'use client'
import './globals.css'
import { Raleway } from 'next/font/google'
import NavBar from './components/navbar/Navbar'
import Footer from './components/footer/footer'
import { AuthContextProvider } from '@/context/AuthContext'
import { usePathname } from 'next/navigation'
import { Provider } from '@/context/AdminContext'
import HeadComponent from './HeadComponent'


const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700']
})


export default function RootLayout({ children }) {
  const pathname = usePathname();

  const shouldHideNavAndFooter = pathname === '/login-admin' ||
    pathname === '/admin' ||
    pathname === '/form' ||
    pathname === '/success';

  return (
    <html lang="en">
      <body className={raleway.className}>
        <AuthContextProvider>
          <Provider>
            <HeadComponent />
            {!shouldHideNavAndFooter && <NavBar />}
            {children}
            {!shouldHideNavAndFooter && <Footer />}
          </Provider>
        </AuthContextProvider>
      </body>
    </html>
  )
}
