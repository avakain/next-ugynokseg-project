import InfluencerItem from "./InfluencerItem";
import { useState, useEffect } from "react";
import getDoument from "@/firebase/firestore/getData";


export default function Influencer() {
  const [influencers, setInfluencers] = useState([]);
  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const { result, error } = await getDoument('influencers');
        if (error) {
          console.log(error);
        } else {
          setInfluencers(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchInfluencers();
  }, []);


  const RenderInfluencers = () => {
    return influencers.map((influencer, index) => {
      return <InfluencerItem
        key={index}
        name={influencer.name}
        social={influencer.socialmedia}
        src={influencer.imageLink} />
    })
  }

  return (
    <div className="mt-50px">
      <div className="m-8 my-15 text-4xl">
        <p>Portfóliónk</p>
      </div>
      <div className="m-8 grid  gap-y-5 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <RenderInfluencers />
      </div>
    </div>
  )
}