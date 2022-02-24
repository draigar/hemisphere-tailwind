import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel3 = ({ content}: any) => {
    const heading = content?.heading?.text;
    const caption = content?.captionText?.text;
    const titleText = content?.titleText?.text;
    const cards = content?.cards;
    const btnDetails = content?.buttonType;
    const background = content?.background.hex;
    const shadow = content?.shadow;

    const isAnimationEnabled = content?.isAnimationEnabled
    const animationDelay = content?.animation?.animationDelay
    const animationDuration = content?.animation?.animationDuration
    const animationName = content?.animation?.animationName
    const animationOffset = content?.animation?.animationOffset

    return (
        <div className="my-12 p-5 relative mx-5 md:mx-12 bg-white shadow-carouselBox2">
        <h3 className="text-center text-3xl text-primary-900 font-light mb-4">
            Review
        </h3>
        <div className="next-browse-btn btn-carousel-3 carousel3n">
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
        <div className="prev-browse-btn btn-carousel-3 carousel3p">
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
            nextEl: ".carousel3n",
            prevEl: ".carousel3p",
            }}
            pagination={{
            el: ".swiper-pagination-rasta",
            }}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
        >
            {[...Array(4)].map((d, i) => (
            <SwiperSlide key={i} className="flex flex-col">
                <div className="shadow-carouselBox2 text-center md:text-left md:space-x-8 p-3 flex space-y-5 md:space-y-0 flex-col md:flex-row items-center">
                <div className="h-[150px] w-[150px] md:h-[190px] md:w-[190px] lg:w-[208px] lg:h-[208px] flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                    src={`/img/girl.png`}
                    alt=""
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    />
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                    <h4 className="text-primary-800 font-semibold text-2xl md:text-3xl lg:text-4xl">
                        Tom Holland
                    </h4>
                    <span className="text-primary-700 text-xs md:text-sm lg:text-xl font-medium">
                        Executive at ABC Limited
                    </span>
                    </div>
                    <p className="relative placeholder:text-xs md:text-sm lg:text-xl md:font-light md:leading-[2.1] font-medium leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.{" "}
                    <div className="absolute -bottom-3 -right-3 -z-10">
                        <div className="relative h-10 w-12 md:h-12 md:w-14 lg:h-14 lg:w-16">
                        <Image
                            src={`/img/quote.png`}
                            alt=""
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="contain"
                        />
                        </div>
                    </div>
                    </p>
                </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        {/* <div className="swiper-pagination-rasta px-5 max-w-lg mx-auto flex justify-center space-x-4"></div> */}
        </div>
    );
};

export default Carousel3;
