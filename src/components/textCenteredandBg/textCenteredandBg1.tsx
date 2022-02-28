import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import MarginSizing from "@web/helpers/marginSizing";
import React from "react";
import { utilities } from "@web/helpers/utilities";

interface props {
  content: any
};

function TextCenteredandBg1(props: props) {
  const { content } = props;
  const backgroundVideo = content?.background?.backgroundVideo?.videoFile?.asset?._ref
  const bgColor = content?.background?.backgroundColor;
  const bgImage = content?.background?.backgroundImage?.asset?._ref;
  const backgroundType = content?.background?.type;
  const imageAsset = bgImage && utilities.ImageFn(bgImage)
  const marginSize = content?.margin

  const bodyText = content?.bodyText;
  const heading = content?.heading;

  const isCTAEnabled = content?.isCTAEnabled;
  const buttonType = content?.buttonType;

  const isAnimationEnabled = content?.isAnimationEnabled
  const animationDelay = content?.animation?.animationDelay
  const animationDuration = content?.animation?.animationDuration
  const animationName = content?.animation?.animationName
  const animationOffset = content?.animation?.animationOffset

  const bgStyle = {
    backgroundImage: backgroundType === 'image' ? `url(${imageAsset})` : undefined,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  const RenderVideo = () => {
    const videoAsset = utilities.VideoFn(backgroundVideo)
    return (
      <div className="h-full">
        <video autoPlay loop muted id="video-bg">
          <source src={videoAsset.url} type={`video/${videoAsset.extension}`} />
        </video>
        <div className="absolute top-0 left-0 w-full bottom-0">
          <ContentComp />
        </div>
      </div>
    )
  }

  const ContentComp = () => (
    <div className="flex md:justify-center md:content-center items-center h-full relative z-10">
      <div className="md:w-2/3 mt-12 p-6">
        <div className="text-center">
          <CustomText content={heading} textAlign="centeredTop" />
        </div>
        <div className="mb-4"></div>
        <CustomText content={bodyText} />
        {isCTAEnabled && <CustomButton content={buttonType} />}
      </div>
    </div>
  );

  const style = {
    padding: marginSize?.type === 'side' ? `auto ${marginSize?.marginsize?.size === 'md' ? '10em'
      : marginSize?.marginsize?.size === 'sm' ? '6em' : marginSize?.marginsize?.size === 'xs' ? '2em'
        : marginSize?.marginsize?.size === 'lg' ? '15em' : marginSize?.marginsize?.size === 'xl' ? '20em'
          : marginSize?.marginsize?.size === 'xxl' ? '25em' : '20px'}`
      : `40px ${marginSize?.marginsize?.size === 'md' ? '10em'
      : marginSize?.marginsize?.size === 'sm' ? '6em' : marginSize?.marginsize?.size === 'xs' ? '2em'
        : marginSize?.marginsize?.size === 'lg' ? '15em' : marginSize?.marginsize?.size === 'xl' ? '20em'
          : marginSize?.marginsize?.size === 'xxl' ? '25em' : '20px'}`
  }

  return (
    <div className={`py-4 px-[10em] h-500px lg:h-600px`}>
      <div style={bgStyle} className={`relative ${isAnimationEnabled && 'wow animate__animated'} ${animationName} ${utilities.ColorCombo(bgColor)} h-full`}
        data-wow-duration={`${animationDuration}s`}
        data-wow-delay={`${animationDelay}s`} data-wow-offset={animationOffset}>
        <div className={`${backgroundType !== 'color' && 'bg-black-1 bg-opacity-25'} z-10 h-full absolute w-full`}></div>
        {backgroundType === 'video' ? <RenderVideo /> : <ContentComp />}
      </div>
    </div>
  );
}

export default TextCenteredandBg1;
