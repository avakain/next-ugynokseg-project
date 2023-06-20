"use client"
import dynamic from 'next/dynamic'


const Form = dynamic(
  () => import('./Form'),
  { ssr: false }
)

export default function page() {
  return (
    <div className='sm:m-auto md:max-w-xl'>
      <Form />
    </div>
  )
}