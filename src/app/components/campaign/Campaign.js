'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import CampaignItem from "./CampaignItem";
import "swiper/css";
import "swiper/css/pagination";
import { CHANNELS } from "@/app/content/content";

/**
 * TODO create and use renderCampaings as a react component 
 * TODO use other than index as key
 */

export default function campaign() {

  const renderCampaigns = () => {
    return CHANNELS.map((channel, index) => {
      return (
        <SwiperSlide key={index}>
          <CampaignItem channel={channel} />
        </SwiperSlide>
      )
    })
  }


  return (
    <div className="">
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
        {renderCampaigns()}
      </Swiper>
    </div>
  )
}


