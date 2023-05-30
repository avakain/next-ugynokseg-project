"use client"
import Button from "../components/button/Button"
import Link from 'next/link';


export default function page() {


  return (
    <div className='sm:m-auto md:max-w-xl'>
      <div className='mt-40 p-8 flex flex-col  bg-white rounded-xl shadow-lg '>
        <section className=" pt-160  pb-160">
          <div className="flex flex-col justify-content-md-center text-md-center color-grey mb-45">
            <div className="color-purple mb-5 text-2xl text-center text-purple-700 text-bold">Kész.</div>
            <h3 className="h3 mb-5 color-black text-2xl text-center">Köszönjük az érdeklődést!</h3>
            <p className="text-lg text-center mb-5">A csapatunk hamarosan jelentkezni fog.</p>
            <Button
              className="w-70% block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <Link href='../'>
                Vissza a főoldalra
              </Link>
            </Button>


          </div>
        </section>
      </div>
    </div>

  )
}