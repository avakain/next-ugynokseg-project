
import Casestudy from "./ResultItems"
import { ImEye } from "react-icons/im";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCheckDouble } from "react-icons/bi";

/**
 * 
 * TODO
 * create a CASE_STUDY array, with study objects, and render it with a map function
 * 
 */
export default function ResultItems() {
  return (
    <div className="m-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
      <Casestudy
        svg={<ImEye size={30} />}
        header={'150M+'}
        subtitle={'Megtekintés értünk el'}
        colored={"kevesebb mint egy év alatt"} />
      <Casestudy
        svg={<AiOutlineHeart size={30} />}
        header={'12M+'}
        subtitle={'Kedvelés videóinkon'}
        colored={"átlagosan több mint 27k/videó"}
      />
      <Casestudy
        svg={<AiOutlineUserAdd size={30} />}
        header={'900K+'}
        subtitle={'Felíratkozó'}
        colored={"az általunk kezelt csatornákra"}

      />
      <Casestudy
        svg={<BiCheckDouble size={30} />}
        header={'350k+'}
        subtitle={'Megtekintés'}
        colored={"áltlagosan videonként"}
      />
    </div>
  )
}