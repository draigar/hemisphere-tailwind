import Button from '../button/mainButton';
import CustomText from "../text/customText";
import Image from "next/image";
import React from "react";
import { utilities } from '@web/helpers/utilities';

interface props {
  content: any
}

const NoBleedGrid = (props: props) => {
  const { content } = props;
  const bodyText = content?.bodyText?.text;
  const heading = content?.heading?.text;
  const bgImage = content?.image?.Image?.asset?._ref;
  const headingLengthSize = heading?.lengthSize?.size
  const bodyTextLengthSize = bodyText?.lengthSize?.size
  const imagePositon = content?.imagePositon
  const marginSize = content?.margin
  const isCTAEnabled = content?.isCTAEnabled
  const buttonType = content?.buttonType

  const isAnimationEnabled = content?.isAnimationEnabled
  const animationDelay = content?.animation?.animationDelay
  const animationDuration = content?.animation?.animationDuration
  const animationName = content?.animation?.animationName
  const animationOffset = content?.animation?.animationOffset

  return (
    <div className={`flex flex-wrap justify-between md:p-11 px-4 py-11 w-full`}>
      <figure className={`flex row w-full mx-2 lg:mx-36 ${isAnimationEnabled && 'wow animate__animated'} ${animationName} p-0 lg:p-8 md:p-0`}
        data-wow-duration={`${animationDuration}s`}
        data-wow-delay={`${animationDelay}s`} data-wow-offset={animationOffset}>
        <div className="grid grid-cols-12">
          <div className={`col-span-12 lg:col-span-6 lg:pt-16 md:p-8 lg:px-16 md:text-left space-y-4 flex flex-col ${imagePositon === "left" ? 'order-last' : ''}`}>
            <div className="w-11/12 mx-auto">
              <div className={` mt-4 ${headingLengthSize === 'md' ? 'w-2/6' :
                headingLengthSize === 'lg' ? 'w-2/5' : headingLengthSize === 'xl' ? 'w-2/4'
                  : headingLengthSize === 'xs' ? 'w-1/5' : headingLengthSize === 'sm' ? 'w-1/4' :
                    headingLengthSize === 'xxl' ? 'w-2/3' : headingLengthSize === 'xxs' ? 'w-1/6' : '10%'}`}>
                <CustomText content={heading} />
              </div>
              <figcaption className={`font-normal mt-8 text-justify ${bodyTextLengthSize === 'md' ? 'w-2/6' :
                bodyTextLengthSize === 'lg' ? 'w-2/5' : bodyTextLengthSize === 'xl' ? 'w-2/4'
                  : bodyTextLengthSize === 'xs' ? 'w-1/5' : bodyTextLengthSize === 'sm' ? 'w-1/4' :
                    bodyTextLengthSize === 'xxl' ? 'w-2/3' : bodyTextLengthSize === 'xxs' ? 'w-1/6' : '10%'} `}>
                <CustomText content={bodyText} classNames="text-right" />
              </figcaption>
              <div className="mt-8">
                {isCTAEnabled && <Button content={buttonType} />}
              </div>
            </div>
          </div>
          <div className="bg-teal-600 col-span-12 lg:col-span-6">
            <img src={utilities.ImageFn(bgImage)} alt="Picture of the author" className="w-full lg:h-full" />
          </div>
        </div>
      </figure>
    </div>
  );
}

export default NoBleedGrid;
