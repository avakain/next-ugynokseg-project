import { TbRulerMeasure } from "react-icons/tb";
import { RiPaletteFill } from "react-icons/ri";
import { MdCheckCircleOutline } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";

export default function WeBelive() {
  return (
    <div className="grid md:grid-cols-2 gap-6 xs:grid-cols-1 bg-slate-400 p-6">
      <div className="grid items-center">
        Mi őszintén hiszünk az influencer marketingben, a pontosan megtervezett
        kampányok sikereiben amivel a közönség is könnyen tudnak azonosulni.
        Az általunk készített videókban fontos számunkra hogy élményt adjunk az nézőinknek a tartalmaink által,
        így lesz az influencer marketing sikeres és hatásos.

      </div>
      <div className="grid items-center">
        <div>Amikben mi jók vagyunk</div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <div><TbRulerMeasure /></div>
            <div>Kampány- és influencer stratégiai tervezés</div>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <div><RiPaletteFill /></div>
            <div>Kreatív tartalom gyártása</div>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <div><MdCheckCircleOutline /></div>
            <div>Teljes körű online jelenlét lebonyolítása</div>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <div><FiGlobe /></div>
            <div>Tik-tok, Instagramm és Facebook fiókok kezelés</div>
          </div>
        </div>
      </div>
    </div>
  )
}