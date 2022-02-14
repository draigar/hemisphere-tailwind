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

  const bodyText = content?.bodyText?.text;
  const heading = content?.heading?.text;

  const isCTAEnabled = content?.isCTAEnabled;
  const buttonType = content?.buttonType;

  console.log(content)

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
    <div className="flex md:justify-center md:content-center md:items-center h-full relative z-10">
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

  return (
    <div className="px-16 py-4 h-600px">
      <div style={bgStyle} className={`relative ${utilities.ColorCombo(bgColor)} h-full ${MarginSizing(marginSize)}`}>
        <div className={`${backgroundType !== 'color' && 'bg-black-1 bg-opacity-25' } z-10 h-full absolute w-full`}></div>
        {backgroundType === 'video' ? <RenderVideo /> : <ContentComp />}
      </div>
    </div>
  );
}

export default TextCenteredandBg1;
