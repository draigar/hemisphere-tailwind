import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import React from "react";
import { utilities } from '../../helpers/utilities';
import Button from '../button/mainButton';
import CustomText from "../text/customText";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel4 = ({ content}: any) => {

  const heading = content?.heading?.text;
  const caption = content?.captionText?.text;
  const titleText = content?.titleText?.text;
  const cards = content?.cards;
  const btnDetails = content?.buttonType;
  const background = content?.background?.hex;
  const shadow = content?.shadow;

  const isAnimationEnabled = content?.isAnimationEnabled
  const animationDelay = content?.animation?.animationDelay
  const animationDuration = content?.animation?.animationDuration
  const animationName = content?.animation?.animationName
  const animationOffset = content?.animation?.animationOffset

  return (
    <div className="my-12 relative bg-teal-700">
      <div className="next-browse-btn nav-btn-carousel1">
        <div className="h-[7px] w-[14px]">
          <Image
            src={`/img/carret_right.png`}
            alt=""
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
      </div>
      <div className="prev-browse-btn nav-btn-carousel1">
        <div className="h-[7px] w-[14px]">
          <Image
            src={`/img/carret_left.png`}
            alt=""
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
      </div>
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
        {[...Array(5)].map((d, i) => (
          <SwiperSlide key={i} className="flex flex-col">
            <div className="relative">
              <Image
                src={`/img/istockphoto-1269998501-170667a.png`}
                alt=""
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
            <div className="flex w-full justify-center">
              <div className="px-3 py-3 -mt-28 z-0 relative shadow-carouselBox rounded bg-white w-[90%] flex flex-col space-y-5">
                <h3 className="text-2xl font-bold">Lorem Ipsum</h3>
                <p className="font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.{" "}
                </p>
                <Link href={`/`}>
                  <a className="group flex flex-x-2 max-w-max items-center relative after:absolute after:-bottom-1 after:h-[2px] after:rounded-md after:w-full after:bg-primary-800">
                    <span className="mr-1 group-hover:mr-2 transition-all duration-150">
                      Let go there{" "}
                    </span>
                    <span className="h-[11px] w-[11px]">
                      <Image
                        src={`/img/right_arrow.png`}
                        alt="right arrow"
                        layout="responsive"
                        height="100%"
                        width="100%"
                      />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination-rasta px-5 max-w-lg mx-auto flex justify-center space-x-4"></div>
    </div>
  );
};

export default Carousel4;
