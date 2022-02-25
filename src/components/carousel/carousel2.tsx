import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowLeft, ArrowRight, } from 'react-feather';
import { Navigation, Pagination, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import CustomText from "../text/customText";
import Image from "next/image";

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
            <div className="absolute left-0 -top-14 lg:top-0 h-full w-full flex flex-row justify-between lg:items-center px-8">
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
                        className="flex flex-col">
                        <div className="min-h-[70vh] md:max-w-lg lg:max-w-2xl flex justify-center space-y-5 md:space-y-8 lg:space-y-10 flex-col">
                            <CustomText content={val?.heading} />
                            <CustomText content={val?.body} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination-2 px-5 max-w-lg mx-auto flex justify-center space-x-4"></div>
        </div>
    );
};

export default Carousel2;
