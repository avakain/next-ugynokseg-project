"use client";
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'
import { Anton } from "next/font/google";
import { useRef } from "react";

const anton = Anton({
  subsets: ['latin'],
  weight: ['400']
})


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

  const previousScrollYRef = useRef(0);

  useEffect(() => {
    // Initialize previousScrollYRef with a value of 0

    const changeColor = () => {
      const { scrollY } = window;
      if (scrollY <= 90 && pathname !== '/form') {
        setTheme({
          bgColor: 'transparent',
          textColor: 'white'
        });
      } else if (scrollY < previousScrollYRef.current && pathname !== '/form') {
        setTheme({
          bgColor: 'transparent',
          textColor: 'transparent'
        });
      } else {
        setTheme({
          bgColor: 'white',
          textColor: 'black'
        });
      }
      previousScrollYRef.current = scrollY; // Update the value of previousScrollYRef
    };

    window.addEventListener('scroll', changeColor);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, [pathname, setTheme]);

  return (
    <div style={{ backgroundColor: bgColor, color: textColor }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className=" my-2 text-lg flex justify-between items-center text-white">
        <Link href='/'>
          <h1 style={{ color: textColor }} className={`font-bold text-3xl ml-3 ${anton.className}`}>Az Ügynökség</h1>
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
            <Link href='/form'>
              Kapcsolat
            </Link>
          </li>
          <li className="p-4 text-lg">
            <Link href='#campaigns'>
              Eredményeink
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
              className="cursor-pointer"

            />
            : <AiOutlineMenu
              size={30}
              onClick={handleCLick}
              style={{ color: textColor }}
              className="cursor-pointer"
            />}

        </div>
        {/*Mobile menu*/}
        <div className={open ?
          'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/100 text-center ease-in duration-300'
          :
          'sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/100 text-center ease-in duration-300'
        }>

          <ul>
            <li
              onClick={() => setOpen(false)}
              className="p-4 text-3xl hover:text-gray-500
            
             ">
              <Link href='/'>
                Főoldal
              </Link>
            </li>
            <li className="p-4 text-3xl hover:text-gray-500"
              onClick={() => setOpen(false)}
            >
              <Link href='/form'>
                Kapcsolat
              </Link>
            </li>
            <li
              onClick={() => setOpen(false)}
              className="p-4 text-3xl hover:text-gray-500">
              <Link href='#campaigns'>
                Eredményeink
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}