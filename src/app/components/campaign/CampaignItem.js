import Image from "next/image"
import Button from "../button/Button";
import Link from "next/link";

export default function CampaignItem({ campaign }) {
  const imageLoader = ({ src, width, height }) => {
    return `${src}?w=${width}&h=${height}`;
  };

  function formatNumber(number) {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    let suffixIndex = 0;

    while (number >= 1000 && suffixIndex < suffixes.length - 1) {
      number /= 1000;
      suffixIndex++;
    }
    return number.toFixed(0) + suffixes[suffixIndex];
  }


  return (
    <div className="grid md:grid-cols-2 gap-1 p-8  rounded-xl my-16">
      <div className="items-center m-auto rounded-xl shadow-lg">
        <Image
          className='text-xl rounded-xl '
          loader={imageLoader}
          src={campaign.imageLink}
          alt={campaign.name}
          width={500}
          height={500}
        />
      </div>
      <div className="grid xs:items-start md:items-center rounded-xl  md:mx-8 ">
        <div className="m-auto">
          <h1 className="md:text-5xl xs:text-3xl my-5 text-indigo-500 ">{campaign.name}</h1>
          <p className="mb-2"> Kampányok kezdete: <strong className="text-red-500"> {campaign.duration} hónap </strong></p>
          <p className="mb-2"> Csatornára feliratkozók száma: <strong className="text-red-500">{formatNumber(campaign.subscribers)}+</strong></p>
          <p className="mb-2"> Elért megtekintés: <strong className="text-red-500">{formatNumber(campaign.views)}+</strong></p>
          <div >
            <Button className={"bg-indigo-500 px-8 py-2 md:px-32 hover:bg-indigo-700 xs:hidden md:block duration-100 text-white mt-16 "}
            >
              <Link href="/form">Írj nekünk</Link>
            </Button>
          </div>
        </div>

        <Button className={"bg-indigo-500 px-8 py-2 md:px-32 hover:bg-indigo-700 xs:flex-grow sm:block  md:hidden duration-100 text-white mt-8 sm:max-w-500"}
        >
          <Link href="/form">Írj nekünk</Link>
        </Button>


      </div>
    </div>
  )
}

