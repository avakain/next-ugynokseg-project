"use client"
import Introducion from "./components/intro/Introducion"
import Results from "./components/resulticonblock/Results"
import Carousel from "./components/testimonials/Testimonials"
import Hero from "./components/hero/Hero";
import Influencer from "./components/influencers/Influencers"
import Campaign from "./components/campaign/Campaign";
import WeBelive from "./components/webelive/WeBelive";

export default function Home() {

  return (
    <main>
      <Hero heading='Kimagasló elérés márkádnak Influencerekkel' message='Kreatív stratégiáink és hatékony kampányaink segítségével garantáltan felhívjuk rád a figyelmet és növeljük márkád ismertségét. Lépj velünk a következő szintre!' />
      <div className="conent">
        <Results />
        <Introducion
          header={'Növeld az online elérésed'}
          title={'Az influencer marketing egy nagyon hatékony eszköz a vállalkozások számára, mert lehetővé teszi, hogy közvetlen kapcsolatot építsenek ki a célközönséggel.'}
          title2={`Függetlenül attól, hogy milye céljaid vannak, mekkora a vállalkozásod, vagy hol helyezkedsz el. A Mi segítségünkkel könnyen elérheted a célközönségedet.
           `}
          title3={'Légy te a következő siker strorynk!'}
        />
        <WeBelive />
        <Carousel />
        <Influencer />
        <Campaign />
      </div>
    </main>
  )
}
