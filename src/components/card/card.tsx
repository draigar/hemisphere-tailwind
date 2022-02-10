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

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <CustomText content={heading} textAlign="centeredTop" />
          <CustomText content={caption} textAlign="centeredTop" />

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {cards.map((val: any, i: number) => (
              <div key={i} className="group relative shadow-lg">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={urlFor(val.Image.asset._ref).url()}
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="py-4 px-6 pb-8">
                  <CustomText content={val?.heading?.text} />
                  <div className="my-4"></div>
                  <CustomText content={val?.subheading?.text} />
                  <CustomText
                    content={val?.bodyText?.text}
                    classNames="text-base font-normal"
                  />
                  {isCTAEnabled && <CustomButton content={btnDetails} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
