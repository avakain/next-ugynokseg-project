import Image from 'next/image';
import tiktok from '../../../../public/images/tiktok-phone.png'
import Button from '../button/Button';
import Link from 'next/link';


export default function Introducion({ header, title, title2, title3 }) {
  return (

    <div className="flex flex-col items-center justify-center md:flex-row w-50 m-8">
      <Image className='m-4 w-50 md:w-1/2' src={tiktok} alt='statistic' />
      <div className='my-4 md:w-1/2'>
        <h2 className="text-3xl">{header}</h2>
        <p className="my-4 text-lg">{title}</p>
        <p className="my-4 text-lg">{title2}</p>
        <p className="my-4 text-lg">{title3}</p>
        <Link href="/form" >
          <div className='flex md:block'>
            <Button className={"bg-indigo-500 px-8 py-2 md:px-32 hover:bg-indigo-700 xs:flex-grow md:block duration-100 text-white mt-8 "}
            >
              Írj nekünk
            </Button>
          </div>
        </Link>
        <div />
      </div >
    </div >


  )
}