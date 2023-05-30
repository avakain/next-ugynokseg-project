"use client";
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'

/**
 * TODO create a LIGHT_THEM and DARK_THEME object
 */
export default function NavBar() {

  const pathname = usePathname();
  const [open, setOpen] = useState(false)

  const [{ bgColor, textColor }, setTheme] = useState(
    pathname === '/' ? {
      bgColor: 'transparent',
      textColor: 'white'
    } :
      {
        bgColor: 'white',
        textColor: 'black'
      }
  );

  const handleCLick = () => {
    setOpen(!open)
  }

  const changeColor = () => {
    if (window.scrollY <= 90 && pathname === '/') {
      setTheme({
        bgColor: 'transparent',
        textColor: 'white'
      })
    } else {
      setTheme({
        bgColor: 'white',
        textColor: 'black'

      })
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <div style={{ backgroundColor: bgColor, color: textColor }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className=" my-2 text-lg flex justify-between items-center text-white">
        <Link href='/'>
          <h1 style={{ color: textColor }} className="font-bold text-4xl">Logo</h1>
        </Link>
        <ul
          style={{ color: textColor }}
          className="hidden sm:flex">
          <li className="p-4 text-lg">
            <Link href='/'>
              Főoldal
            </Link>
          </li>
          <li className="p-4 text-lg">
            <Link href='/'>
              Portfóliók
            </Link>
          </li>
          <li className="p-4 text-lg">
            <Link href='/'>
              Kampányaink
            </Link>
          </li>
        </ul>
        <div className="hidden sm:flex">
        </div>
        {/*Mobile menu*/}
        <div className="block sm:hidden z-10 mr-5 my-3">
          {open ?
            <AiOutlineClose
              size={30}
              onClick={handleCLick}

            />
            : <AiOutlineMenu
              size={30}
              onClick={handleCLick}
              style={{ color: textColor }}
            />}

        </div>
        {/*Mobile menu*/}
        <div className={open ?
          'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/100 text-center ease-in duration-300'
          :
          'sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/100 text-center ease-in duration-300'
        }>

          <ul>
            <li className="p-4 text-4xl hover:text-gray-500 ">
              <Link href='/'>
                Főoldal
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href='/'>
                Portfólió
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href='/'>
                Kampányaink
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}