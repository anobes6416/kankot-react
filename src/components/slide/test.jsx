
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CatCard from '../catCard/CatCard';
import {cards} from "../../data";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slide.scss';
import 'swiper';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
       direction="horizontal"
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">

        {/* <SwiperSlide>Slide 1</SwiperSlide> */}

        {cards.map(card=>(
          <CatCard item = {card} key={card.id}/>
        ))}
      </Swiper>
    </>
  );
}
