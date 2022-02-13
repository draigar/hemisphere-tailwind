import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import Image from "next/image";
import React from "react";
import urlFor from "../../helpers/imageUrlGenerator";

function Card1({ content }: any) {
  const heading = content?.heading?.text;
  const caption = content?.captionText?.text;
  const cards = content?.cards;
  const btnDetails = content?.buttonType;
  const background = content?.background;
  const shadow = content?.shadow;

  console.log(content)

  const colorCombo = (_color: any) => {
    const colorClass = _color?.colorClass;
    const brand = _color?.brand;
    const neutral = _color?.neutral;
    const black = _color?.black;
    const primary = _color?.primary;
    const colors =
      colorClass === 'brand'
        ? `brand-${brand}`
        : colorClass === 'neutral'
          ? `neutral-${neutral}`
          : colorClass === 'primary'
            ? `primary-${primary}`
            : colorClass === 'black'
              ? `black-${black}`
              : 'white';
    return colors;
  };

  const Horizontal = () => (
    <div className={`mt-6 space-y-12 lg:space-y-0 lg:grid ${cards?.length === 2 ? 'lg:grid-cols-2 px-48'
      : cards?.length === 3 ? 'lg:grid-cols-3' : cards?.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-1'} lg:gap-x-6`}>
      {cards.map((val: any, i: number) => (
        <div key={i} className={`group relative ${shadow && 'shadow-lg'} p-0 bg-${val?.background !== undefined ? colorCombo(val?.background) : 'white'} `}>
          <div className="relative w-full h-80 bg-white overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img
              src={urlFor(val.Image.asset._ref).url()}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="py-4 px-3 pb-8">
            <div className="mb-4">
              <CustomText content={val?.heading?.text} textAlign="center" />
            </div>
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
        <figure key={i} className={`md:flex my-6 bg-${val?.background !== undefined ? colorCombo(val?.background) : 'white'} p-8 md:p-0 ${shadow && 'shadow-lg'}`}>
          <img className={`${shadow && 'shadow-lg'} w-24 h-24 md:w-48 md:h-auto mx-auto`} src={urlFor(val.Image.asset._ref).url()} alt="" width="384" height="512" />
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
    <div className={`bg-${background !== undefined ? colorCombo(background) : 'bg-gray-100'} `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <div className="w-2/3">
            <div className="mb-4">
              <CustomText content={heading} textAlign="center" />
            </div>
            <CustomText content={caption} textAlign="center" />
          </div>
          <div className="my-10">
          <Vertical />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
