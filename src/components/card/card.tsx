import CustomText from "../text/customText";
import Image from "next/image";
import React from "react";
import urlFor from "../../helpers/imageUrlGenerator";
import CustomButton from "../button/mainButton";

function Card1({ content }: any) {
  const heading = content?.heading?.text;
  const caption = content?.captionText?.text;
  const cards = content?.cards;
  const btnDetails = content?.buttonType;
  const isCTAEnabled = content?.isCTAEnabled;

  const Horizontal = () => (
    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 border-2">
      {cards.map((val: any, i: number) => (
        <div key={i} className="group relative shadow-lg p-4 border-2">
          <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img
              src={urlFor(val.Image.asset._ref).url()}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="py-4 px-6 pb-8">
            <CustomText content={val?.heading?.text} textAlign="center" />
            <CustomText
              content={val?.subheading?.text}
              textAlign="center"
            />
            <div className="my-4"></div>
            <CustomText content={val?.bodyText?.text} textAlign="center" classNames="text-base font-normal" />
          </div>
        </div>
      ))}
    </div>
  );

  const Vertical = () => (
    <div className="">
      {cards.map((val: any, i: number) => (
        <figure key={i} className="md:flex my-6 bg-white p-8 md:p-0">
          <img className="w-24 h-24 md:w-48 md:h-auto mx-auto" src={urlFor(val.Image.asset._ref).url()} alt="" width="384" height="512" />
          <div className="pt-6 md:p-8 text-center md:text-left">
            <CustomText content={val?.heading?.text} textAlign="center" />
            <CustomText
              content={val?.subheading?.text}
              textAlign="center"
            />
            <div className="my-4"></div>
            <CustomText content={val?.bodyText?.text} textAlign="center" classNames="text-base font-normal" />
          </div>
        </figure>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <CustomText content={heading} textAlign="center" />
          <CustomText content={caption} textAlign="center" />
          <Vertical />
        </div>
      </div>
    </div>
  );
}

export default Card1;
