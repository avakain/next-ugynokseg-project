import { TbRulerMeasure } from "react-icons/tb";
import { RiPaletteFill } from "react-icons/ri";
import { MdCheckCircleOutline } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";


const content = {
  title: "Szolgáltatásaink:",
  items: [
    {
      icon: <TbRulerMeasure size={35} className='mr-5 p-1 bg-gradient-to-tr  from-indigo-500  to-red-500  text-white rounded-md' />,
      text: "Kampány és influencer stratégiai tervezés",
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
      text: "Tik-tok, Instagram és Facebook fiókok kezelése",
    },
  ],
};

export default function Services({ header, title, title2 }) {
  return (
    <div className="grid md:grid-cols-2 xs:grid-cols-1 md:gap-10 bg-slate-100 p-6">
      <div className="flex flex-col  md:col-start-1 md:col-end-2 xs:mb-8">
        <h3 className="my-8 text-3xl ">{header}</h3>
        <p className="text-lg">
          {title}
        </p>
        <br className="m-3 " />
        <p className="text-lg">
          {title2}
        </p>
      </div>
      <div className="grid items-center">
        <div className="my-8 text-3xl">{content.title}</div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 relative bg-clip-border rounded-xl">
          {content.items.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg bg-clip-border">
              <div className="mb-3">{item.icon}</div>
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