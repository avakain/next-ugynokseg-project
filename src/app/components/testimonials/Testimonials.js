'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import TestimonialItems from "./TestimonialItems";
import { useEffect, useState } from "react";
import getDoument from "@/firebase/firestore/getData";
import { SwiperNavButtons } from "./SwiperNavButton";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



export default function Testimonials({ header, header2 }) {



  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { result, error } = await getDoument('testimonials');
        if (error) {
          console.log(error);
        } else {
          setTestimonials(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTestimonials();
  }, []);

  const renderTestemonials = () => {
    return testimonials.map((testemonial, index) => {
      return (
        <SwiperSlide
          key={index}>
          <TestimonialItems
            key={index}
            content={testemonial.content}
            brand={testemonial.name} />
        </SwiperSlide>
      )
    })
  }


  return (
    <>
      <section className="bg-gray-100 rounded-xl md:mx-8">
        <div
          className="mx-auto max-w-[1500px] px-2 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8 border-radius-2xl md:my-8"
        >
          <div
            className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16 xs:m-6"
          >
            <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {header}
                <br className="hidden sm:block lg:hidden" />
                {header2}
              </h2>

            </div>
            <div className="mx-2 lg:col-span-2 lg:mx-0">
              <Swiper
                autoHeight={true}
                initialSlide={2}
                loop={true}
                slidesPerView={'auto'}
                spaceBetween={50}
                autoplay={{
                  delay: 8000,
                }}
                navigation={{
                  nextEl: '.next-button',
                  prevEl: '.prev-button',
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
                    autoHeight: false
                  },

                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
                style={{
                  "--swiper-pagination-color": "#C74E75",
                  "--swiper-pagination-bullet-inactive-color": "#999999",
                  "--swiper-pagination-bullet-inactive-opacity": "1",
                  "--swiper-pagination-bullet-height": "4px",
                  "--swiper-pagination-bullet-width": "20px",
                  "--swiper-pagination-bullet-horizontal-gap": "6px",
                  "--swiper-pagination-bullet-border-radius": "5px"
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
