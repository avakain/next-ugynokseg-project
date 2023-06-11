import ResultItems from "./ResultItems"
import { ImEye } from "react-icons/im";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCheckDouble } from "react-icons/bi";


const CASE_STUDY = [
  {
    id: 1,
    svg: <ImEye size={30} />,
    header: '150M+',
    subtitle: 'Megtekintés értünk el',
    colored: 'kevesebb mint egy év alatt',
  },
  {
    id: 2,
    svg: <AiOutlineHeart size={30} />,
    header: '12M+',
    subtitle: 'Kedvelés videóinkon',
    colored: 'átlagosan több mint 27k/videó',
  },
  {
    id: 3,
    svg: <AiOutlineUserAdd size={30} />,
    header: '900K+',
    subtitle: 'Felíratkozó',
    colored: 'az általunk kezelt csatornákra',
  },
  {
    id: 4,
    svg: <BiCheckDouble size={30} />,
    header: '350k+',
    subtitle: 'Megtekintés',
    colored: 'áltlagosan videonként',
  },
];


export default function Result() {
  return (
    <div className="m-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
      {CASE_STUDY.map((study) => (
        <ResultItems
          key={study.id}
          svg={study.svg}
          header={study.header}
          subtitle={study.subtitle}
          colored={study.colored}
        />
      ))}
    </div>
  );
}