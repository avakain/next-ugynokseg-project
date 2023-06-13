import { Anton } from "next/font/google";
import { Anaheim } from "next/font/google";

const anton = Anton({
  subsets: ['latin'],
  weight: ['400',]
})



export default function Footer() {
  return (
    <div className="dark:bg-gray-300 p-2">
      <footer className="bg-white rounded-lg shadow dark:bg-gray-600 m-4 z-10">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between xs:text-center  ">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
              <span className={`self-center text-2xl font-semibold whitespace-nowrap  dark:text-white ${anton.className}`}>Az ügynökség</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0 dark:text-gray-100 ">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Rólunk</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-100 lg:my-8" />
          <span className="block text-sm text-gray-500 xs:text-center dark:text-gray-400">&copy; 2023 <a href="/" className="hover:underline"><span className={anton.className}>Az ügynökség</span>
          </a> All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}

