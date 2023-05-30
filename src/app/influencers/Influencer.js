import InfluencerItem from "./InfluencerItem"


const data = [
  {
    name: "Farkas Timi",
    socialMedia: {
      tiktok: 620000,
      instagram: 417000,
    },
    img: '/images/influencers/farkas_timi.jpg'

  },
  {
    name: "Zsigmond Andi",
    socialMedia: {
      tiktok: 650000,
      instagram: 145000
    },
    img: '/images/influencers/zsigmond_angi.jpg'
  },
  {
    name: "Telefondoki",
    socialMedia: {
      tiktok: 100000
    },
    img: '/images/influencers/telefondoki.jpg'
  },
  {
    name: "Szurma András",
    socialMedia: {
      tiktok: 220000,
      instagram: 50000
    },
    img: '/images/influencers/szurma_andras.jpg'
  }
];


export default function Influencer() {

  const renderInfluencers = () => {

    return data.map((influencer) => {
      return <InfluencerItem
        key={influencer.name}
        name={influencer.name}
        social={influencer.socialMedia}
        src={influencer.img} />
    })
  }


  return (
    <div>
      <div>
        <p>Portfóliónk</p>
      </div>
      <div className="m-8 grid  gap-y-5 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {renderInfluencers()}
      </div>
    </div>
  )
}