import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { IMAGE_URL } from 'utils/config';
import { NewsImageItem } from 'types/news';

const Images = ({ data }: { data: NewsImageItem[] }) => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={true}
        navigation={true}
        loop={true}
        modules={[Navigation, Pagination]}
      >
        {data.map((v, i) => {
          const { image } = v;
          return (
            <SwiperSlide key={i} className="d-flex justify-content-center">
              <img
                className="e-img e-img--cover"
                src={`${IMAGE_URL}${image}`}
                alt="slide"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Images;
