'use client'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import getDoument from "@/firebase/firestore/getData";
import { Autoplay, Pagination } from "swiper";
import CampaignItem from "./CampaignItem";
import "swiper/css";
import "swiper/css/pagination";


export default function Campaign() {

  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const { result, error } = await getDoument('results');
        if (error) {
          console.log(error);
        } else {
          setCampaigns(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCampaigns();
  }, []);



  const Rendercampaigns = () => {
    return campaigns.map((campaign, index) => {
      return (
        <SwiperSlide key={index}>
          <CampaignItem campaign={campaign} />
        </SwiperSlide>
      )
    })
  }


  return (
    <div
      id='campaigns'
    >
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
        {Rendercampaigns()}
      </Swiper>
    </div>
  )
}


