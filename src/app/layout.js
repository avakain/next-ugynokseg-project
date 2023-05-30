'use client'
import './globals.css'
import { Raleway } from 'next/font/google'
import NavBar from './components/navbar/Navbar'
import Footer from './components/footer/footer'
import { AuthContextProvider } from '@/context/AuthContext'
import { usePathname } from 'next/navigation'
import { ModalProvider } from '@/context/ModalContext'
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: 'Az ügynökség',
  description: 'Socialmedia szolgaltatasok',
}

//write me a function that hide nav and footer at different pages

export default function RootLayout({ children }) {
  const pathname = usePathname();


  return (
    <html lang="en">
      <body className={raleway.className}>
        <AuthContextProvider>
          <ModalProvider>
            {pathname === '/login-admin' || pathname === '/admin' || pathname === '/admin/add-review' || pathname === '/admin/add-influencer' ? null : <NavBar />}
            {children}
            {pathname === '/login-admin' || pathname === '/admin' || pathname === '/admin/add-review' || pathname === '/admin/add-influencer' ? null : <Footer />}
          </ModalProvider>
        </AuthContextProvider>
      </body>
    </html>
  )
}
