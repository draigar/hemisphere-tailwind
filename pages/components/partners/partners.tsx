import { CustomText } from "../text/customText";
import Image from "next/image";
import React from "react";
import { bgColorCombo } from "../../helpers/backgroundColorFn";
import { urlFor } from "@web/helpers/imageUrlGenerator";

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
            <div className="text-center mb-6">
              <CustomText content={heading} textAlign="center" />
            </div>
            <div className="text-center mb-12">
              <CustomText content={caption} textAlign="center" />
            </div>
            <div className="flex flex-wrap justify-center">
              {partnerLogo?.map((val: any, i: number) => {
                return (
                  <div key={i} className="w-20 md:w-28 mr-6">
                    <Image
                      src={urlFor(val.Image.asset._ref).url()}
                      alt="Picture of the author"
                      width={500}
                      height={500}
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
