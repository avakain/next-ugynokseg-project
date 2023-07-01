import dynamic from 'next/dynamic'
import NavBar from '../components/navbar/Navbar'
import FooterComponent from '../components/footer/FooterComponent'

const Form = dynamic(
  () => import('./Form'),
  { ssr: false }
)

export const metadata = {
  title: 'Az Ügynökség - Influencer Marketing a Sikerért',
  description: 'Az influencer marketing egy nagyon hatékony eszköz a vállalkozások számára, mert lehetővé teszi, hogy közvetlen kapcsolatot építsenek ki a célközönséggel.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
}


export default function page() {
  return (
    <div>
      <NavBar />
      <div className='sm:m-auto md:max-w-xl'>
        <Form />
      </div>
      <FooterComponent />
    </div>
  )
}