import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import * as React from 'react';

import { AnimationHandler, AnimationHandlerResponse } from "react-responsive-carousel/lib/ts/components/Carousel/types";
import { StyleSheet, Text, View } from 'react-native';

import { Carousel } from 'react-responsive-carousel';

interface CarouselProps { }

const CarouselComp = (props: CarouselProps) => {

    const fadeAnimationHandler: AnimationHandler = (props, state): AnimationHandlerResponse => {
        const transitionTime = props.transitionTime + 'ms';
        const transitionTimingFunction = 'ease-in-out';

        let slideStyle: React.CSSProperties = {
            position: 'absolute',
            display: 'block',
            zIndex: -2,
            minHeight: '100%',
            opacity: 0,
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            transitionTimingFunction: transitionTimingFunction,
            msTransitionTimingFunction: transitionTimingFunction,
            MozTransitionTimingFunction: transitionTimingFunction,
            WebkitTransitionTimingFunction: transitionTimingFunction,
            OTransitionTimingFunction: transitionTimingFunction,
        };

        if (!state.swiping) {
            slideStyle = {
                ...slideStyle,
                WebkitTransitionDuration: transitionTime,
                MozTransitionDuration: transitionTime,
                OTransitionDuration: transitionTime,
                transitionDuration: transitionTime,
                msTransitionDuration: transitionTime,
            };
        }

        return {
            slideStyle,
            selectedStyle: { ...slideStyle, opacity: 1, position: 'relative' },
            prevStyle: { ...slideStyle },
        };
    };

    const Carousel1 = () => (
        <div>
            <Carousel autoPlay dynamicHeight infiniteLoop showThumbs={false}
                animationHandler={fadeAnimationHandler} showStatus={false} showIndicators={false}>
                <div>
                    <img style={{ height: '800px' }} src="https://images.pexels.com/photos/6799723/pexels-photo-6799723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img style={{ height: '800px' }} src="https://images.pexels.com/photos/5912093/pexels-photo-5912093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        </div>
    )

    const Carousel2 = () => (
        <div className="container mx-auto w-full overflow-hidden relative">
            <div className="w-full h-full absolute">
                <div className="w-1/4 h-full absolute z-50 left-0" style={{ background: 'linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
                <div className="w-1/4 h-full absolute z-50 right-0" style={{ background: 'linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
            </div>

            <div className="carousel-items flex items-center justify-center" style={{ width: 'fit-content', animation: 'carouselAnim 10s infinite alternate linear' }}>

            <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style={{ width: '270px' }}>
                <svg className="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z" /></svg>
                {/* <button className="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> */}
                <span className="text-teal-400 font-bold text-xl mb-3">Sup3r-Us3r</span>
                <img className="h-16 w-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img" />
                    <p className="mt-3 text-gray-600 text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!"</p>
                    <button className="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">Button</button>
            </div>

            <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style={{ width: '270px' }}>
                <svg className="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z" /></svg>
                {/* <button className="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> */}
                <span className="text-teal-400 font-bold text-xl mb-3">Sup3r-Us3r</span>
                <img className="h-16 w-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img" />
                    <p className="mt-3 text-gray-600 text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!"</p>
                    <button className="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">Button</button>
            </div>

            <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style={{ width: '270px' }}>
                <svg className="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z" /></svg>
                {/* <button className="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> */}
                <span className="text-teal-400 font-bold text-xl mb-3">Sup3r-Us3r</span>
                <img className="h-16 w-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img" />
                    <p className="mt-3 text-gray-600 text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!"</p>
                    <button className="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">Button</button>
            </div>

            <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style={{ width: '270px' }}>
                <svg className="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z" /></svg>
                {/* <button className="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> */}
                <span className="text-teal-400 font-bold text-xl mb-3">Sup3r-Us3r</span>
                <img className="h-16 w-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img" />
                    <p className="mt-3 text-gray-600 text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!"</p>
                    <button className="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">Button</button>
            </div>

            <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style={{ width: '270px' }}>
                <svg className="fill-current text-teal-400 hover:text-teal-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z" /></svg>
                {/* <button className="absolute top-0 right-0 bg-teal-400 rounded-full px-1 py-0 font-bold text-lg">+</button> */}
                <span className="text-teal-400 font-bold text-xl mb-3">Sup3r-Us3r</span>
                <img className="h-16 w-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img" />
                    <p className="mt-3 text-gray-600 text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!"</p>
                    <button className="mt-4 mb-2 bg-teal-400 rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-teal-300 focus:outline-none">Button</button>
            </div>

            </div>

        </div>
    );

    return (
        <Carousel1 />
    );
};

export default CarouselComp;
