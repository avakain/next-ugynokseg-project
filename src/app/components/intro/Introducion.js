import Image from 'next/image';
import tiktok from '../../../../public/images/tiktok-phone.png'


export default function Introducion({ header, title, title2 }) {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row w-50 m-8">

      <Image className='m-4 w-50 md:w-1/2' src={tiktok} alt='statistic' />

      <div className='my-4 md:w-1/2'>
        <h2 className="text-3xl">{header}</h2>
        <p className="my-4 text-lg">{title}</p>
        <p className="my-4 text-lg">{title2}</p>
      </div>
    </div>
  )
}