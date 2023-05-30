"use client"
import Introducion from "./components/intro/Introducion"
import Results from "./components/results/Results"
import Carousel from "./components/carousel/Carousel"
import Hero from "./components/hero/Hero";
import Influencer from "./components/influencers/Influencers"
import Campaign from "./components/campaign/Campaign";
import WeBelive from "./components/webelive/WeBelive";



export default function Home() {

  return (

    <main>
      <Hero heading='Kimagasló elérés márkádnak Influencerekkel' message='Kreatív stratégiáink és hatékony kampányaink segítségével garantáltan felhívjuk rád a figyelmet és növeljük márkád ismertségét. Lépj velünk a következő szintre!' />
      <div className="conent">
        <Introducion
          header={'Növeld az online elérésed'}
          title={'Segítünk  TikTok és YouTube short  videók készítésében, kezeljük a céged Instagram és Facebook oldalát. '}
          title2={'Kampányaink segítségével garantáltan felhívjuk rád a figyelmet és növeljük márkád ismertségét. Lépj velünk a következő szintre!'}
        />
        <Results />
        <Carousel />
        <Influencer />
        <Campaign />
        <WeBelive />
      </div>
    </main>
  )
}
