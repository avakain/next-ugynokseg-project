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
    <div className="grid md:grid-cols-2 gap-6 xs:grid-cols-1 bg-slate-400 p-6 m-8">
      <div className="grid items-center">
        Mi őszintén hiszünk az influencer marketingben, a pontosan megtervezett
        kampányok sikereiben amivel a közönség is könnyen tudnak azonosulni.
        Az általunk készített videókban fontos számunkra hogy élményt adjunk az nézőinknek a tartalmaink által,
        így lesz az influencer marketing sikeres és hatásos.
      </div>
      <div className="grid items-center">
        <div className="my-8 text-xl">{content.title}</div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 relative z-10 bg-clip-border rounded-xl">
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