import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowLeft, ArrowRight, } from 'react-feather';
import { Navigation, Pagination, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import CustomText from "../text/customText";
import Image from "next/image";
import { utilities } from "@web/helpers/utilities";

interface props {
    content: any;
}


const Carousel2 = (props: props) => {
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
    console.log(`============Carousel2=====================`)

    return (
        <div className="px-5 md:px-14 relative bg-cover ">
            <div className="hidden absolute left-0 -top-14 lg:top-0 h-full w-full flex-row justify-between lg:items-center px-8">
                <div className="next-browse-btn btn-carousel-para carousel2n">
                    <ArrowLeft size={30} />
                </div>
                <div className="prev-browse-btn btn-carousel-para carousel2p">
                    <ArrowRight size={30} />
                </div>
            </div>
            <Swiper
                speed={600}
                parallax={true}
                navigation={{
                    nextEl: ".carousel2n",
                    prevEl: ".carousel2p",
                }}
                pagination={{
                    clickable: true,
                    el: ".swiper-pagination-2",
                    bulletActiveClass: "swiper-pagination-bullet-active-rasta2",
                    bulletClass: "swiper-pagination-bullet-rasta2",
                }}
                modules={[Parallax, Navigation, Pagination]}
            >
                {carouselElements && carouselElements.map((val: any, i: number) => (
                    <SwiperSlide
                        key={i}
                        className="flex flex-col relative">
                        <div className="absolute w-full h-full ">
                            <Image
                                src={utilities.ImageFn(val?.Image.Image.asset?._ref)}
                                alt=""
                                width="100%"
                                height="100%"
                                layout="fill"
                            />
                        </div>
                        <div className={`relative bg-black-1 bg-opacity-20 z-10 min-h-[70vh] w-full flex justify-center flex-col px-8`}>
                            <div className="md:max-w-lg lg:max-w-2xl space-y-5 md:space-y-8 lg:space-y-10">
                                <CustomText content={val?.heading} />
                                <CustomText content={val?.body} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination-2 px-5 max-w-lg mx-auto flex justify-center space-x-4"></div>
        </div>
    );
};

export default Carousel2;
