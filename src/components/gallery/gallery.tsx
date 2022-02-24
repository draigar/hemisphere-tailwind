import Image from "next/image";
import React from "react";

const Gallery1 = () => {
    return (
        <div className="my-8 px-5 lg:px-0 md:max-w-3xl flex flex-col w-full space-y-5 mx-auto">
        <h1 className="text-center md:font-bold text-2xl md:text-3xl">Title</h1>
        <div className="grid grid-cols-12 gap-y-4 md:gap-y-0 md:gap-x-5">
            <div className="col-span-12 md:col-span-8 md:h-40 w-full">
            <Image
                src={`/img/pexels-nataliya-vaitkevich-7852448.png`}
                alt=""
                width="100%"
                height="100%"
                layout="responsive"
            />
            </div>
            <div className="col-span-12 space-x-4 md:space-x-0 md:col-span-4 flex md:flex-col md:space-y-5">
            <div className="flex-1 w-full">
                <Image
                src={`/img/20210918.png`}
                alt=""
                width="100%"
                height="100%"
                layout="responsive"
                />
            </div>
            <div className="flex-1 w-full">
                <Image
                src={`/img/Rectangle6.png`}
                alt=""
                width="100%"
                height="100%"
                layout="responsive"
                />
            </div>
            </div>
        </div>
        </div>
    );
};

export default Gallery1;
