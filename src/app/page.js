import Introducion from "./components/intro/Introducion"
import Results from "./components/resulticonblock/Results"
import Carousel from "./components/testimonials/Testimonials"
import Hero from "./components/hero/Hero";
import Campaign from "./components/campaign/Campaign";
import Services from "./components/services/Services";
import NavBar from './components/navbar/Navbar'
import FooterComponent from './components/footer/FooterComponent'


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
      <NavBar />
      <Hero
        heading='Engedje, hogy vállalkozása kitűnjön a “TikTok-dzsungelben”!'
        message='Influenszer marketing és TikTok-oldalak építése!' />
      <div className="conent">
        <Results />
        <Introducion
          header={'Az Ön sikere a mi szenvedélyünk'}
          title={'Úgy gondoljuk, hogy vállalkozásának megvan a lehetősége a TikTok népszerűségének kiaknázására.'}
          title2={`Célunk, hogy tevékenységünkkel lendületet adjunk vállalkozásának, növeljük az online jelenlétét és támogassuk növekedését.
           `}

        />
        <Services
          header={'Hagyja, hogy szakértelmünk vezesse!'}
          title={'TikTok-marketing csapatunk mélyrehatóan ismeri a platformot, és átfogó stratégiát dolgoz ki vállalkozása számára.'}
          title2={'Az oldalépítéstől kezdve az influenszer kampányokig minden részletre odafigyelünk, hogy a legjobb eredményeket érjük el önnek.'}
        />
        <Campaign />
        <Carousel header={'Nekünk higgyen... '} header2={'Hanem az ügyfeleinknek!'} />
      </div>
      <FooterComponent />
    </main>
  )
}
