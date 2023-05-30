import InfluencerItem from "./InfluencerItem";
import { INFLUENCERS } from "@/app/content/content";



export default function Influencer() {

  const renderInfluencers = () => {

    return INFLUENCERS.map((influencer, index) => {
      return <InfluencerItem
        key={index}
        name={influencer.name}
        social={influencer.socialMedia}
        src={influencer.img} />
    })
  }


  return (
    <div className="mt-50px">
      <div className="m-8 my-15 text-4xl">
        <p>Portfóliónk</p>
      </div>
      <div className="m-8 grid  gap-y-5 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {renderInfluencers()}
      </div>
    </div>
  )
}