import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { AnyStyledComponent } from "styled-components";
import CustomText from "../text/customText";
import Image from "next/image";
import Link from "next/link";
import { utilities } from "@web/helpers/utilities";

interface props {
    content: AnyStyledComponent;
}

const Carousel3 = (props: props) => {
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

    const hasMargin = content?.margin?.hasMargin

    console.log(`============Carousel3===============`)
    console.log(content)
    console.log(`============Carousel3=====================`)

    return (
        <div className={`${hasMargin && 'lg:px-[15em]'}`}>
            <div className={`my-12 p-5 relative mx-5 md:mx-12 bg-white ${shadow && 'shadow-carouselBox2'}`}>
                {titleText && <div className="w-full text-center lg:px-24 mb-8">
                    <div className="mb-4">
                        <CustomText content={titleText} textAlign="center" />
                    </div>
                </div>}
                <div className="hidden">
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
                    {carouselElements.map((val: any, i: number) => (
                        <SwiperSlide
                            key={i}
                            className="flex flex-col">
                            <div className={` ${shadow && 'shadow-carouselBox2'} text-center md:text-left md:space-x-8 p-3 flex space-y-5 md:space-y-0 flex-col md:flex-row items-center`}>
                                <div className="h-[150px] w-[150px] md:h-[190px] md:w-[190px] lg:w-[208px] lg:h-[208px] flex-shrink-0 overflow-hidden rounded-full">
                                    <Image
                                        src={utilities.ImageFn(val?.Image?.Image.asset._ref)}
                                        alt=""
                                        width="100%"
                                        height="100%"
                                        layout="responsive"
                                    />
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <div className="flex flex-col">
                                        <div className="mb-4">
                                            <CustomText content={val?.heading?.text} textAlign="center" />
                                        </div>
                                        <div style={{ zIndex: 4 }}>
                                            <CustomText content={val?.body?.text} textAlign="center" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <div className="swiper-pagination-rasta px-5 max-w-lg mx-auto flex justify-center space-x-4"></div> */}
            </div>
        </div>
    );
};

export default Carousel3;
