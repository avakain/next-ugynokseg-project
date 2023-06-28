import { Anton } from "next/font/google";
import { Anaheim } from "next/font/google";
import Link from "next/link";

const anton = Anton({
  subsets: ['latin'],
  weight: ['400',]
})



export default function Footer() {
  return (
    <div className="dark:bg-white p-2">
      <footer className="bg-white rounded-lg  dark:bg-gray-100 m-6 z-10 shadow-lg">
        <div className="w-full max-w-screen-xl mx-auto md:py-8">
          <div className="sm:flex sm:justify-between xs:text-center xs:items-center p-4 ">
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
              <span className={`self-center text-2xl font-semibold whitespace-nowrap  dark:text-indigo-500 ${anton.className}`}>Az ügynökség</span>
            </Link>
            <ul className="flex flex-wrap items-center md:mb-6 text-sm font-medium text-gray-900 sm:mb-0 dark:text-indigo-500 ">
              <li >
                <Link href='#campaigns'
                  className="mr-4 hover:underline md:mr-6 "
                >Rólunk
                </Link>
              </li>
              <li>
                <Link href="/form" className="hover:underline">
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 sm:mx-auto border  border-white lg:my-8" />
          <span className="block text-sm  xs:text-center dark:text-gray-600 pb-6">&copy; 2023 <span className={anton.className}>Az ügynökség </span>
            All Rights Reserved.</span>
        </div>
      </footer >
    </div >
  )
}

