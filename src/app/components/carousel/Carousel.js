'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import CarouselItem from "./CarouselItem";
import { TESTEMONIALS } from "@/app/content/content";
import "swiper/css";
import "swiper/css/pagination";


export default function Carousel() {

  const renderTestemonials = () => {
    return TESTEMONIALS.map((testemonial, index) => {
      return (
        <SwiperSlide key={index}>
          <CarouselItem key={index} content={testemonial.content} brand={testemonial.name} />
        </SwiperSlide>)
    })
  }

  return (
    <>
      <section className="bg-gray-100 rounded-xl md:mx-8">
        <div
          className="mx-auto max-w-[1500px] px-2 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8 border-radius-2xl"
        >
          <div
            className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16 xs:m-6"
          >
            <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {'Ne nekünk higgy... '}
                <br className="hidden sm:block lg:hidden" />
                Hidd az ügyfeleinknek!
              </h2>
              <p className="mt-4 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
                veritatis illo placeat harum porro optio fugit a culpa sunt id!
              </p>
            </div>
            <div className="-mx-6  lg:col-span-2 lg:mx-0 ">

              <Swiper
                initialSlide={2}
                loop={true}
                slidesPerView={'auto'}
                spaceBetween={50}
                autoplay={{
                  delay: 8000,
                }}
                speed={1000}
                pagination={{
                  clickable: true,
                  autoplay: true,
                }}
                breakpoints={{
                  1024: {
                    slidesPerView: 1.5,
                    centeredSlides: true,
                  },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                style={{
                  "--swiper-pagination-color": "#C74E75",
                  "--swiper-pagination-bullet-inactive-color": "#999999",
                  "--swiper-pagination-bullet-inactive-opacity": "1",
                  "--swiper-pagination-bullet-height": "4px",
                  "--swiper-pagination-bullet-width": "20px",
                  "--swiper-pagination-bullet-horizontal-gap": "6px",
                  "--swiper-pagination-bullet-border-radius": "5px",
                }}
              >
                {renderTestemonials()}
              </Swiper>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}
