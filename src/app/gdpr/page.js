import GDPRComponent from "./GDPRComponent"
import Link from "next/link"
import Button from "../components/button/Button"

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
    <div className='sm:m-auto md:max-w-xl'>

      <GDPRComponent />
      <Link href="/form" >
        <div className='flex '>
          <Button className={"bg-indigo-500 px-8 py-2 sm:px-20 md:px-32 hover:bg-indigo-700 xs:flex-grow  text-center flex justify-center items-center duration-100 text-white mt-8 "}
          >
            Vissza
          </Button>
        </div>
      </Link>
    </div>
  )
}