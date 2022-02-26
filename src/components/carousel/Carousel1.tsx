import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useEffect, useState } from "react";
import useWindowSize from "@web/hooks/useWindowSize";
import CustomText from "../text/customText";
import { utilities } from "@web/helpers/utilities";

interface props {
  content: any;
}

const Carousel1 = (props: props) => {
    const { content } = props;
    const heading = content?.heading?.text;
    const caption = content?.captionText?.text;
    const titleText = content?.titleText?.text;
    const carouselElements = content?.elements;
    const btnDetails = content?.buttonType;
    const background = content?.background?.hex;
    const shadow = content?.shadow;
    const isAnimationEnabled = content?.isAnimationEnabled
    const animationDelay = content?.animation?.animationDelay
    const animationDuration = content?.animation?.animationDuration
    const animationName = content?.animation?.animationName
    const animationOffset = content?.animation?.animationOffset

    console.log(`============Carousel2===============`)
    console.log(content)
    console.log(`============Carousel2===============`)

  const swiperSlide = useSwiperSlide();
  const { isMobile } = useWindowSize();
  console.log(`Is mobile is ${isMobile}`);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [initialSlide, setInitialSlide] = useState<number>(() => {
    console.log(`Inside f: ${isMobile}`);
    //TODO: use responsiveness to know whether to return 1 or zero
    return 1;
  });

  return (
    <div className="relative min-h-[90vh] w-[85%] md:w-[90%] mx-auto">
      <div className="next-browse-btn btn-carousel-para carousel1 carousel1n">
        <svg
          width="14"
          height="26"
          viewBox="0 0 14 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.999996 24.1424L12.5714 12.5709L1 0.999512"
            stroke="#969696"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="prev-browse-btn btn-carousel-para carousel1 carousel1p">
        <svg
          width="14"
          height="26"
          viewBox="0 0 14 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5703 0.999722L0.998881 12.5712L12.5703 24.1426"
            stroke="#969696"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Swiper
        initialSlide={initialSlide}
        centeredSlides={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        speed={600}
        navigation={{
          nextEl: ".carousel1n",
          prevEl: ".carousel1p",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-1",
          bulletActiveClass: "swiper-pagination-bullet-active-rasta",
        }}
        modules={[Navigation, Pagination]}
        onSlideChange={(s) => {
          setActiveIndex(s.activeIndex);
          console.log(swiperSlide);
        }}
      >
        {carouselElements && carouselElements.map((val: any, i: number) => (
          <SwiperSlide key={i} className={`c1`}>
            <div
              className={`flex space-y-3 md:space-y-5 flex-col ${
                activeIndex === i
                  ? "!w-[300px] xl:!w-[600px] lg:!w-[500px]"
                  : "w-[200px] xl:!w-[350px] lg:!w-[220px] mx-auto"
              }`}
            >
              <div
                className={`relative ${
                  activeIndex === i
                    ? "h-[300px] xl:h-[450px]"
                    : "md:mt-14 h-[200px] xl:h-[350px] w-full"
                }`}
              >
                <Image
                  src={utilities.ImageFn(val?.Image?.Image.asset._ref)}
                  alt={val?.Image?.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={`${activeIndex === i ? "block" : "hidden"}`}>
                  <CustomText content={val?.heading} />
                  <CustomText content={val?.body} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination-1 mt-3 px-5 max-w-lg mx-auto flex justify-center space-x-4"></div>
    </div>
  );
};

export default Carousel1;
