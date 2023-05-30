import dynamic from 'next/dynamic'
import useHideContext from '../hooks/use-hidenavfooter'
import { useEffect } from 'react'

const Form = dynamic(
  () => import('./Form'),
  { ssr: false }
)


export default function page() {

  const { setShow } = useHideContext()
  useEffect(() => {
    setShow(true)
  })

  return (
    <>
      <div className='sm:m-auto md:max-w-xl'>
        <Form />
      </div>
    </>
  )
}