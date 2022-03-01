import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import Image from "next/image";
import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import urlFor from "../../helpers/imageUrlGenerator";
import { utilities } from "@web/helpers/utilities";

function Newsletter3({ content }: any) {

  const bgImage = content?.background?.backgroundImage?.asset?._ref;
  const headLine = content?.headLine?.text;
  const tagline = content?.tagline?.text;
  const buttonPosition = content?.buttonPosition;
  const btnDetails = content?.buttonType;
  const imageAsset = utilities.ImageFn(bgImage);
  const inputElement = content?.inputElement?.inputElements;
  const inputElementColor = content?.inputElement?.inputLabelColor?.hex;
  const submissionResponse = content?.inputElement?.submitResponse;

  return (
    <div
      className={`md:flex md:justify-between md:py-9 md:px-28 lg:px-36 p-4 `}
    >
      <div className="md:w-48">
        <div className="relative">
          <Image
            src={imageAsset}
            alt=""
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
      </div>
      <div className="mt-8 lg:mt-0 md:w-48 self-center">
        <CustomText content={headLine} />
        <div className="mb-2"></div>
        <CustomText content={tagline} />
        <div className="my-8"></div>
        <form className="mt-6 m md:mt-0">
          {inputElement &&
            inputElement.map((val: any, i: number) => {
              return (
                <div key={i} className="mb-4">
                  <label
                    style={{ color: `${inputElementColor}` }}
                    className="block"
                  >
                    {val?.inputlabel}
                  </label>
                  <input
                    placeholder={val?.inputplaceholder}
                    type={val.type}
                    className="w-full mt-2 p-2 h-14 bg-gray-200"
                  />
                </div>
              );
            })}
          <div
            
          >
            <CustomButton content={btnDetails} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter3;
