import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import React from "react";
import { utilities } from "@web/helpers/utilities";

function TextCardOverflow2({ content }: any) {
  const bgImage = content?.image?.Image?.asset?._ref;
  const imageAsset = bgImage && utilities.ImageFn(bgImage);

  const bodyText = content?.bodyText?.text;
  const heading = content?.heading?.text;

  const isCTAEnabled = content?.isCTAEnabled;
  const buttonType = content?.buttonType;

  const isAnimationEnabled = content?.isAnimationEnabled
  const animationDelay = content?.animation?.animationDelay
  const animationDuration = content?.animation?.animationDuration
  const animationName = content?.animation?.animationName
  const animationOffset = content?.animation?.animationOffset


  const bgStyle = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${imageAsset})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const textBgSTyle = {
    backgroundColor: "#000000",
    opacity: 0.6,
  };

  return (
    <div style={bgStyle} className={`${isAnimationEnabled && 'wow animate__animated'} ${animationName} h-700px`} data-wow-duration={`${animationDuration}s`}
      data-wow-delay={`${animationDelay}s`} data-wow-offset={animationOffset}>
      <div className="pt-16 h-full">
        <div className="w-full p-8 flex justify-center">
          <CustomText content={heading} />
        </div>
        <div className="flex flex-col items-end justify-end px-8 py-12 h-full">
          <div className="w-full md:w-[480px] lg:mr-32 mb-8">
            <div
              className="w-full p-8 mr-4 mt-9 mb-14"
              style={textBgSTyle}
            >
              <CustomText content={bodyText} />
              {isCTAEnabled && <CustomButton content={buttonType} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextCardOverflow2;
