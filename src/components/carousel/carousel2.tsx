import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomText from "../text/customText";

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
    console.log(carouselElements)
    console.log(`============Carousel2=====================`)

    return (
        <div className="px-5 md:px-14 relative bg-landing bg-cover min-h-screen ">
        <div className="next-browse-btn btn-carousel-para carousel2n">
            <svg
            width="10"
            height="20"
            viewBox="0 0 14 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M1 24.1429L12.5714 12.5714L1 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </svg>
        </div>
        <div className="prev-browse-btn btn-carousel-para carousel2p">
            <svg
            width="10"
            height="20"
            viewBox="0 0 14 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M12.5703 0.999722L0.998881 12.5712L12.5703 24.1426"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </svg>
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
            {carouselElements.map((val: any, i: number) => (
            <SwiperSlide 
                key={i} 
                className="flex flex-col">
                <div className="min-h-[90vh] md:max-w-lg lg:max-w-2xl flex justify-center space-y-5 md:space-y-8 lg:space-y-10 flex-col">
                <CustomText content={val?.heading?.text} />
                <CustomText content={val?.body?.text} />
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-pagination-2 px-5 max-w-lg mx-auto flex justify-center space-x-4"></div>
        </div>
    );
};

export default Carousel2;
