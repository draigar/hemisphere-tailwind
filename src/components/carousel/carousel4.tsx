import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowLeft, ArrowRight, } from 'react-feather';
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from '../button/mainButton';
import CustomText from "../text/customText";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { utilities } from '../../helpers/utilities';

const Carousel4 = ({ content }: any) => {

  const titleText = content?.titleText;
  const cards = content?.cards;
  const btnDetails = content?.buttonType;
  const background = content?.background?.hex;
  const shadow = content?.shadow;
  const isAnimationEnabled = content?.isAnimationEnabled
  const animationDelay = content?.animation?.animationDelay
  const animationDuration = content?.animation?.animationDuration
  const animationName = content?.animation?.animationName
  const animationOffset = content?.animation?.animationOffset
  const carouselElements = content?.elements;

  console.log('====================================');
  console.log(content);
  console.log('====================================');

  return (
    <div className="my-12 relative px-4 lg:px-12">
      {titleText && <div className="w-full lg:px-24 mb-8">
        <div className="mb-4">
          <CustomText content={titleText} textAlign="center" />
        </div>
      </div>}

      <div className="absolute left-0 -top-14 lg:top-0 h-full w-full flex flex-row justify-between lg:items-center px-8">
        <div className="next-browse-btn nav-btn-carousel1">
          <div className="bg-white shadow-md rounded-full border border-gray-200 p-2">
            <ArrowLeft size={30} />
          </div>
        </div>
        <div className="prev-browse-btn nav-btn-carousel1">
          <div className="bg-white shadow-md rounded-full border border-gray-200 p-2">
            <ArrowRight size={30} />
          </div>
        </div>
      </div>

      <div className="lg:px-24 ">
        <Swiper
          className="mb-5"
          navigation={{
            nextEl: ".next-browse-btn",
            prevEl: ".prev-browse-btn",
          }}
          pagination={{
            el: ".swiper-pagination-rasta",
          }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
          }}
        >
          {carouselElements && carouselElements.map((d: any, i: number) => (
            <SwiperSlide key={i} className="flex flex-col pb-4">
              <div className="relative">
                <Image
                  src={utilities.ImageFn(d?.Image?.Image.asset._ref)}
                  alt=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                />
              </div>
              <div className="flex w-full justify-center">
                <div className="px-3 py-3 -mt-28 z-0 relative shadow-carouselBox bg-white w-[90%] flex flex-col space-y-5">
                  <h3 className="text-2xl font-bold"><CustomText content={d?.heading} /></h3>
                  <CustomText content={d?.body} />
                  {d?.isCTAEnabled && <Button content={d?.button} />}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="swiper-pagination-rasta px-5 max-w-lg mx-auto flex justify-center space-x-4"></div>
    </div>
  );
};

export default Carousel4;
