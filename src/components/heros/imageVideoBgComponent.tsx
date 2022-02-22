import * as React from "react";

import CustomText from "../text/customText";
import { utilities } from "@web/helpers/utilities";
import Button from '../button/mainButton';

interface ImageVideoBgComponentProps {
  content: any;
}

const ImageVideoBgComponent = (props: ImageVideoBgComponentProps) => {
  const { content } = props;

  const heading = content.heading;
  const tagLine = content.tagline;
  const backgroundType = content.background.type;
  const backgroundVideo =
    content.background.backgroundVideo?.videoFile?.asset?._ref;
  const backgroundImage = content.background.backgroundImage?.asset?._ref;
  const backgroundColor = content.background.backgroundColor;
  const taglineText = tagLine.text;
  const textAlign = content.textAlign;
  const isTaglineEnabled = content.isTaglineEnabled;
  const isCTAEnabled = content.isCTAEnabled;
  const buttonType = content.buttonType;
  const headingText = heading.text;
  const headingLengthSize = heading.lengthSize?.size;
  const taglineLengthSize = tagLine.lengthSize?.size;


  const ContentComp = () => (
    <div
      className={`flex flex-col h-full p-5 sm:p-5 lg:p-32 bg-black-1 bg-opacity-25 ${
        textAlign === "centered"
          ? "justify-center text-center items-center"
          : textAlign === "rightBottom"
          ? "justify-end text-right items-end"
          : textAlign === "right"
          ? "justify-center text-right items-end"
          : textAlign === "leftBottom"
          ? "justify-end text-left items-start"
          : textAlign === "left"
          ? "justify-center text-left items-start"
          : textAlign === "centeredTop"
          ? "justify-start text-center items-center"
          : "justify-center items-center"
      }`}
    >
      <div
        className={`wow animate__animated animate__zoomIn mb-8 ${
          headingLengthSize === "md"
            ? "w-2/6"
            : headingLengthSize === "lg"
            ? "w-2/5"
            : headingLengthSize === "xl"
            ? "w-2/4"
            : headingLengthSize === "xs"
            ? "w-1/5"
            : headingLengthSize === "sm"
            ? "w-1/4"
            : headingLengthSize === "xxl"
            ? "w-2/3"
            : headingLengthSize === "xxs"
            ? "w-1/6"
            : "10%"
        } `}
        data-wow-duration="1s"
        data-wow-delay="0s"
      >
        <CustomText content={headingText} textAlign={textAlign} />
      </div>
      <div
        className={`wow animate__animated animate__zoomIn ${
          taglineLengthSize === "md"
            ? "w-2/6"
            : taglineLengthSize === "lg"
            ? "w-2/5"
            : taglineLengthSize === "xl"
            ? "w-2/4"
            : taglineLengthSize === "xs"
            ? "w-1/5"
            : taglineLengthSize === "sm"
            ? "w-1/4"
            : taglineLengthSize === "xxl"
            ? "w-2/3"
            : taglineLengthSize === "xxs"
            ? "w-1/6"
            : "10%"
        } `}
        data-wow-duration="1s"
        data-wow-delay=".7s"
      >
        {isTaglineEnabled && (
          <CustomText content={taglineText} textAlign={textAlign} />
        )}
      </div>
      {isCTAEnabled && <Button content={buttonType} />}
    </div>
  );

  const RenderVideo = () => {
    const videoAsset = utilities.VideoFn(backgroundVideo);
    return (
      <div className="h-full">
        <video autoPlay loop muted id="video-bg">
          <source src={videoAsset.url} type={`video/${videoAsset.extension}`} />
        </video>
        <div className="absolute top-0 left-0 w-full bottom-0">
          <ContentComp />
        </div>
      </div>
    );
  };

  const RenderImage = () => {
    const imageAsset = utilities.ImageFn(backgroundImage);
    const bgStyle = {
      backgroundImage: `url(${imageAsset})`,
    };
    return (
      <div style={bgStyle} className="h-full bg-no-repeat bg-cover">
        <ContentComp />
      </div>
    );
  };

  return (
    <div className="bg-teal-600 h-screen-90 relative">
      {backgroundType === "image" ? (
        <RenderImage />
      ) : backgroundType === "video" ? (
        <RenderVideo />
      ) : (
        <ContentComp />
      )}
    </div>
  );
};

export default ImageVideoBgComponent;
