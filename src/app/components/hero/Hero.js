import Button from "../button/Button"
import Link from "next/link"



export default function Hero({ heading, message }) {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-cover  bg-bottom custom-img">
      {/*Overlay*/}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b  bg-black/80" />
      <div className="p-5 text-white z-[2]">
        <div className="m-5 justify-center items-center">
          <h2 className=" text-4xl font-bold">{heading}</h2>
          <p className="py-5 text-xl">{message}</p>
        </div>
        <div className="xs:grid sm:flex sm:justify-center mx-4">
          <Link href="/form">
            <Button className={"bg-indigo-500 px-8 py-2  hover:bg-indigo-700  duration-100 sm:w-40 xs:w-full"}
            >
              Írj nekünk
            </Button>
          </Link>
          <Link href='#campaigns'>
            <Button className={"bg-red-500 px-8 py-2  hover:bg-red-700 duration-100 md:sm-40 xs:w-full"}>
              Eredményeink
            </Button>
          </Link>

        </div>
      </div>
    </div>
  )
}