import GDPRComponent from "./GDPRComponent"
import Link from "next/link"
import Button from "../components/button/Button"

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