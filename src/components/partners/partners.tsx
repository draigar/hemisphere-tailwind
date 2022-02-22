import CustomText from "../text/customText";
import Image from "next/image";
import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import urlFor from "../../helpers/imageUrlGenerator";

function Partners({ content }: any) {
  const caption = content?.caption;
  const heading = content?.heading;
  const partnerLogo = content?.partnerLogo;

  const ImageBg = content?.background?.backgroundImage?.asset?._ref;
  const colorBg = content?.background?.backgroundColor;

  const isAnimationEnabled = content?.isAnimationEnabled
  const animationDelay = content?.animation?.animationDelay
  const animationDuration = content?.animation?.animationDuration
  const animationName = content?.animation?.animationName
  const animationOffset = content?.animation?.animationOffset

  const imageAsset = ImageBg && urlFor(ImageBg).url();

  const bgStyle = {
    backgroundImage: `url(${imageAsset})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const bgOverlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  };

  const bgColorStyle = {
    backgroundColor: bgColorCombo(colorBg),
  };

  return (
    <div style={ImageBg && bgStyle}>
      <div style={ImageBg && bgOverlayStyle}>
        <div style={colorBg && bgColorStyle}>
          <div className="md:p-11 px-4 py-11 mx-4 lg:mx-20">
            <div
              className="flex flex-col lg:flex-row items-start lg:items-center mb-8"
            >
              <div className="text-center mr-4">
                <CustomText content={heading} textAlign="center" />
              </div>
              <div className="text-center">
                <CustomText content={caption} textAlign="center" />
              </div>
            </div>
            <div
              className={`flex flex-wrap justify-start relative ${isAnimationEnabled && 'wow animate__animated'} ${animationName}`}
              data-wow-duration={`${animationDuration}s`}
              data-wow-delay={`${animationDelay}s`} data-wow-offset={animationOffset}>
              {partnerLogo?.map((val: any, i: number) => {
                return (
                  <div key={i} className="w-20 md:w-28 mb-2 mr-6 relative">
                    <Image
                      src={urlFor(val.Image.asset._ref).url()}
                      alt="Picture of the author"
                      width="100%"
                      height="100%"
                      layout="responsive"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
