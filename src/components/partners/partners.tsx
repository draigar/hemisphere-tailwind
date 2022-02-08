import CustomText from "../text/customText";
import Image from "next/image";
import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import urlFor from "../../helpers/imageUrlGenerator";

function Partners({ content }: any) {
  const caption = content?.caption?.text;
  const heading = content?.heading?.text;
  const partnerLogo = content?.partnerLogo;

  const ImageBg = content?.background?.backgroundImage?.asset?._ref;
  const colorBg = content?.background?.backgroundColor;

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
          <div className="md:p-11 px-4 py-11">
            <div className="flex flex-row items-center mb-8 wow animate__animated animate__slideInLeft" 
            data-wow-duration="1s" data-wow-delay="0">
              <div className="text-center mr-4">
                <CustomText content={heading} textAlign="center" />
              </div>
              <div className="text-center">
                <CustomText content={caption} textAlign="center" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center relative wow animate__animated animate__slideInUp" 
            data-wow-duration="1.2s" data-wow-delay="1.2s">
              {partnerLogo?.map((val: any, i: number) => {
                return (
                  <div key={i} className="w-20 md:w-28 mr-6 relative">
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
