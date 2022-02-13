import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import MarginSizing from "@web/helpers/marginSizing";
import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import urlFor from "../../helpers/imageUrlGenerator";
import videoAssetFor from "@web/helpers/video-url";

interface props {
  content: any
};

function TextCenteredandBg1(props: props) {
  const { content } = props;
  const backgroundVideo = content?.background?.backgroundVideo?.videoFile?.asset?._ref
  const bgColor = content?.background?.backgroundColor;
  const bgImage = content?.background?.backgroundImage?.asset?._ref;
  const backgroundType = content?.background?.type;
  const imageAsset = bgImage && urlFor(bgImage)?.url();
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
    const videoAsset = videoAssetFor(backgroundVideo)
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
    return backgroundType === 'color' ? colors : 'white';
  };

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
      <div style={bgStyle} className={`relative bg-${colorCombo(bgColor)} h-full ${MarginSizing(marginSize)}`}>
        <div className={`${backgroundType !== 'color' && 'bg-black-1 bg-opacity-25' } z-10 h-full absolute w-full`}></div>
        {backgroundType === 'video' ? <RenderVideo /> : <ContentComp />}
      </div>
    </div>
  );
}

export default TextCenteredandBg1;
