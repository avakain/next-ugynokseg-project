import { AiFillInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

export default function InfluencerItem({ name, social, src }) {

  function formatNumber(number) {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    let suffixIndex = 0;

    while (number >= 1000 && suffixIndex < suffixes.length - 1) {
      number /= 1000;
      suffixIndex++;
    }
    return number.toFixed(0) + suffixes[suffixIndex];
  }

  const followersAll = () => {
    return social.instagram ? social.instagram + social.tiktok : social.tiktok
  }

  return (<div>
    <div className="max-w-sm m-auto mt-16 rounded-xl overflow-hidden shadow-lg ">




      <div className='border-b-2 border-gray-100 pb-2'>
        <div className="image-container">
          <Image
            src={`${src}`}
            alt={name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className='mb-2 w-max text-xl'
          />
        </div>
        <div className="font-medium text-left text-gray-darker ml-6">{name}</div>
      </div>

      <div className="px-6 py-4 flex flex-col ">
        <div className='flex mb-2 '>
          {social.instagram ? <AiFillInstagram size={30} className='mr-5 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white rounded-md' /> : null}

          <FaTiktok size={30} className='mr-5 text-gray-900' />
        </div>
        <div className='flex justify-between'>
          <div className='text-bold text-gray-900'> Követők száma: </div>
          <div className='text-bold-lg text-gray-900'>{formatNumber(followersAll())}</div>
        </div>
      </div>

    </div>
  </div>)
}