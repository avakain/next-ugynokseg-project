import { TbRulerMeasure } from "react-icons/tb";
import { RiPaletteFill } from "react-icons/ri";
import { MdCheckCircleOutline } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";


const content = {
  title: "Szolgáltatásaink:",
  items: [
    {
      icon: <TbRulerMeasure size={35} className='mr-5 p-1 bg-gradient-to-tr  from-indigo-500  to-red-500  text-white rounded-md' />,
      text: "Kampány- és influencer stratégiai tervezés",
    },
    {
      icon: <RiPaletteFill size={35} className='mr-5 p-1 bg-gradient-to-tr  from-indigo-500  to-red-500  text-white rounded-md' />,
      text: "Kreatív tartalom gyártása",
    },
    {
      icon: <MdCheckCircleOutline size={35} className='mr-5 p-1 bg-gradient-to-tr  from-indigo-500  to-red-500  text-white rounded-md' />,
      text: "Teljes körű online jelenlét lebonyolítása",
    },
    {
      icon: <FiGlobe size={35} className='mr-5 p-1 bg-gradient-to-tr  from-indigo-500  to-red-500  text-white rounded-md' />,
      text: "Tik-tok, Instagramm és Facebook fiókok kezelés",
    },
  ],
};

export default function WeBelive() {
  return (
    <div className="grid md:grid-cols-2  xs:grid-cols-1 md:gap-6 lg:gap-10 bg-slate-100 p-6">
      <div className="flex flex-col justify-center md:col-start-1 md:col-end-2 ">
        <p>
          Mi őszintén hiszünk abban, amit csinálunk, a pontosan megtervezett kampányok sikereiben, amivel a közönség könnyen tud azonosulni.
        </p>
        <br className="m-3" />
        <p>
          Az általunk készített videókban fontos számunkra, hogy élményt adjunk nézőinknek a tartalmaink által.
          Így lesz az influencer marketing sikeres és hatásos.
        </p>
      </div>
      <div className="grid items-center ">
        <div className="my-8 text-3xl">{content.title}</div>
        <div className="grid md:grid-cols-2  sm:grid-cols-1 gap-6 relative  bg-clip-border rounded-xl ">
          {content.items.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg bg-clip-border ">
              <div className="mb-3" >{item.icon}</div>
              <div className="border-t border-blue-gray-50">
                <div className="mt-2">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}