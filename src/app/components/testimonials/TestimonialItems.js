
export default function CarouselItem({ content, brand }) {
  return (
    <>
      <figure className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
        <blockquote className="p-8 ">
          {/*Icon*/}
          <div className="mb-5 text-indigo-500 ">
            <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
          </div>
          <p className="font -bold text-lg">
            {content}
          </p>
        </blockquote>
        <div className=" flex items-center justify-center  p-8 py-4 bg-gradient-to-tr  from-indigo-500  to-red-500 shadow-blue-500/40 ">
          <div className="flex items-center  gap-5 text-white text-xl text-bold ">
            {brand}
          </div>
        </div>
      </figure>
    </>
  )
}