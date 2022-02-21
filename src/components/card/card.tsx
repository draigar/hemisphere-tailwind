/* eslint-disable @next/next/no-img-element */
import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import Image from "next/image";
import Quote from '../../assets/svg/quote';
import React from "react";
import { utilities } from '../../helpers/utilities'

function Card1({ content }: any) {
  const heading = content?.heading?.text;
  const caption = content?.captionText?.text;
  const cards = content?.cards;
  const btnDetails = content?.buttonType;
  const background = content?.background;
  const shadow = content?.shadow;
  const type = content?.type;

  const isAnimationEnabled = content?.isAnimationEnabled
  const animationDelay = content?.animation?.animationDelay
  const animationDuration = content?.animation?.animationDuration
  const animationName = content?.animation?.animationName
  const animationOffset = content?.animation?.animationOffset

  console.log(content)

  const Horizontal = () => (
    <div className={`mt-6 space-y-12 lg:space-y-0 lg:grid ${cards?.length === 2 ? 'lg:grid-cols-2 px-48'
      : cards?.length === 3 ? 'lg:grid-cols-3' : cards?.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-1'} lg:gap-x-6`}>
      {cards.map((val: any, i: number) => (
        <div key={i} className={`group relative ${shadow && 'shadow-lg'} p-0 ${val?.background !== undefined ? utilities.ColorCombo(val?.background) : 'white'} `}
        >
          <div className="relative w-full h-80 bg-white overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img
              src={utilities.ImageFn(val.Image.asset._ref)}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className=" relative py-4 px-3 pb-8">
            <div className="mb-4">
              <CustomText content={val?.heading?.text} textAlign="center" />
            </div>
            <CustomText
              content={val?.subheading?.text}
              textAlign="center"
            />
            <div className="my-4"></div>
            <div style={{ zIndex: 4 }}>
              <CustomText content={val?.bodyText?.text} textAlign="center" classNames="text-base font-normal" />
            </div>
            {content?.isReview && <div className="relative flex justify-end w-full bottom-6 opacity-75 right-0">
              <Quote width={92} height={82} />
            </div>}
          </div>
        </div>
      ))}
    </div>
  );

  const Vertical = () => (
    <div className="">
      {cards.map((val: any, i: number) => (
        <figure key={i} className={`flex items-start my-6 ${val?.background !== undefined ? utilities.ColorCombo(val?.background) : 'white'} p-8 md:p-0 ${shadow && 'shadow-lg'}`}>
          <div className="w-80 h-48">
            <img className={`${shadow && 'shadow-lg'} ${type === 'verticalRoundedImage' && 'rounded-full'} w-full h-44 mx-auto`} src={utilities.ImageFn(val.Image.asset._ref)} alt="" />
          </div>
          <div className="px-8 text-left relative">
            <CustomText content={val?.heading?.text} textAlign="center" />
            <CustomText
              content={val?.subheading?.text}
              textAlign="center"
            />
            <div className="my-6"></div>
            <CustomText content={val?.bodyText?.text} textAlign="center" classNames="text-base font-normal" />
            {content?.isReview && <div className="relative flex justify-end w-full bottom-6 right-0">
              <Quote width={101} height={92} />
            </div>}
          </div>
        </figure>
      ))}
    </div>
  );

  return (
    <div className={`${background !== undefined ? utilities.ColorCombo(background) : 'transparent'} `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-6 sm:py-6 lg:py-2 lg:max-w-none">
          <div className="w-2/3">
            <div className="mb-4">
              <CustomText content={heading} textAlign="center" />
            </div>
            <CustomText content={caption} textAlign="center" />
          </div>
          <div className={`my-10 ${isAnimationEnabled && 'wow animate__animated'} ${animationName}`} data-wow-duration={`${animationDuration}s`}
            data-wow-delay={`${animationDelay}s`} data-wow-offset={animationOffset}>
            {type === 'vertical' ? <Vertical /> : type === 'horizontal' ? <Horizontal /> : <Vertical />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
