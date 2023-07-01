import dynamic from 'next/dynamic'
import NavBar from '../components/navbar/Navbar'
import FooterComponent from '../components/footer/FooterComponent'

const Form = dynamic(
  () => import('./Form'),
  { ssr: false }
)

export default function page() {
  return (
    <div>
      <NavBar />
      <div className='sm:m-auto md:max-w-xl'>
        <Form />
      </div>
      <FooterComponent />
    </div>
  )
}