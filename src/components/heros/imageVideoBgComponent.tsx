import * as React from "react";

import Button from '../button/mainButton';
import CustomText from "../text/customText";
import { utilities } from "@web/helpers/utilities";

interface ImageVideoBgComponentProps {
  content: any;
}

const ImageVideoBgComponent = (props: ImageVideoBgComponentProps) => {
  const { content } = props;

  const heading = content?.heading;
  const backgroundType = content?.background.type;
  const backgroundVideo =
    content?.background.backgroundVideo?.videoFile?.asset?._ref;
  const backgroundImage = content?.background.backgroundImage?.asset?._ref;
  const backgroundColor = content?.background.backgroundColor;
  const tagline = content?.tagline;
  const textAlign = content?.textAlign;
  const isTaglineEnabled = content?.isTaglineEnabled;
  const isCTAEnabled = content?.isCTAEnabled;
  const buttonType = content?.buttonType;
  const headingText = heading?.text;
  const headingLengthSize = heading?.lengthSize?.size;
  const taglineLengthSize = content?.tagline.lengthSize?.size;

  const ContentComp = () => (
    <div
      className={`flex flex-col h-full p-5 sm:p-5 lg:p-32 bg-black-1 bg-opacity-25 ${textAlign === "centered"
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
        className={`mb-8 ${headingLengthSize === "md"
            ? "lg:w-2/6"
            : headingLengthSize === "lg"
              ? "lg:w-2/5"
              : headingLengthSize === "xl"
                ? "lg:w-4/6"
                : headingLengthSize === "xs"
                  ? "lg:w-1/5"
                  : headingLengthSize === "sm"
                    ? "lg:w-1/4"
                    : headingLengthSize === "xxl"
                      ? "lg:w-4/5"
                      : headingLengthSize === "xxs"
                        ? "lg:w-1/12"
                        : "10%"
          } `}
      >
        <CustomText content={heading} textAlign={textAlign} />
      </div>
      <div
        className={`${taglineLengthSize === "md"
            ? "lg:w-2/6"
            : taglineLengthSize === "lg"
              ? "lg:w-2/5"
              : taglineLengthSize === "xl"
                ? "lg:w-4/6"
                : taglineLengthSize === "xs"
                  ? "lg:w-1/5"
                  : taglineLengthSize === "sm"
                    ? "lg:w-1/4"
                    : taglineLengthSize === "xxl"
                      ? "lg:w-4/5"
                      : taglineLengthSize === "xxs"
                        ? "lg:w-1/12"
                        : "10%"
          } `}
      >
        {isTaglineEnabled && (
          <CustomText content={tagline} textAlign={textAlign} />
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
    <div className="h-500px lg:h-screen-90 relative">
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
