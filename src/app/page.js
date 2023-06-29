"use client"
import Introducion from "./components/intro/Introducion"
import Results from "./components/resulticonblock/Results"
import Carousel from "./components/testimonials/Testimonials"
import Hero from "./components/hero/Hero";
import Influencer from "./components/influencers/Influencers"
import Campaign from "./components/campaign/Campaign";
import Services from "./components/services/Services";

export const metadata = {
  title: 'Az Ügynökség - Influencer Marketing a Sikerért',
  description: 'Az influencer marketing egy nagyon hatékony eszköz a vállalkozások számára, mert lehetővé teszi, hogy közvetlen kapcsolatot építsenek ki a célközönséggel.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
}


export default function Home() {
  return (
    <main>
      <Hero
        heading='Engedje, hogy vállalkozása kitűnjön a TikTok dzsungelében'
        message=' Professzionális oldalak építése!' />
      <div className="conent">
        <Results />
        <Introducion
          header={'Növeld az online elérésed'}
          title={'Az influencer marketing egy nagyon hatékony eszköz a vállalkozások számára, mert lehetővé teszi, hogy közvetlen kapcsolatot építsenek ki a célközönséggel.'}
          title2={`Függetlenül attól, hogy milyen céljaid vannak, mekkora a vállalkozásod, vagy hol helyezkedsz el. A mi segítségünkkel könnyen elérheted a célközönségedet.
           `}
          title3={'Légy te a következő sikertörténetünk!'}
        />
        <Services
          header={'Az Ön sikere a mi szenvedélyünk'}
          title={'Úgy gondoljuk, hogy minden vállalkozásnak megvan a lehetősége a TikTok népszerűségének kiaknázására. Célunk, hogy a marketing tevékenységével lendületet adjunk vállalkozásának, növeljük az online jelenlétét és támogassuk növekedését.'}
          title2={'Hagyja, hogy szakértelmünk vezesse - TikTok marketing csapatunk mélyrehatóan ismeri a platformot, és átfogó stratégiát dolgoz ki vállalkozása számára. Az oldalépítéstől kezdve az influenszer kampányokig minden részletre odafigyelünk, hogy a legjobb eredményeket érjük el.'}
        />
        <Campaign />
        <Carousel />
      </div>
    </main>
  )
}
