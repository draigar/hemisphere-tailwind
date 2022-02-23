import React from "react";
import urlFor from "../../helpers/imageUrlGenerator";
import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import bgColorCombo from "../../helpers/backgroundColorFn";
import { utilities } from "../../helpers/utilities";

function Newsletter2({ content }: any) {
  console.log(content);

  const bgImage = content?.background?.backgroundImage?.asset?._ref;
  const colorBg = content?.background?.backgroundColor?.hex;
  const backgroundVideo =
    content?.background?.backgroundVideo?.videoFile?.asset?._ref;
  const backgroundType = content?.background?.type;
  const headLine = content?.headLine?.text;
  const tagline = content?.tagline?.text;
  const buttonPosition = content?.buttonPosition;
  const btnDetails = content?.buttonType;
  const imageAsset = bgImage && urlFor(bgImage)?.url();
  const inputElement = content?.inputElement?.inputElements;
  const inputElementColor = content?.inputElement?.inputLabelColor?.hex;
  const submissionResponse = content?.inputElement?.submitResponse;


  // const bgColor = utilities.ColorCombo(colorBg);

  const bgStyle = {
    backgroundColor: backgroundType === "color" ? `${colorBg}` : undefined,
  };

  return (
    <div
      style={bgStyle}
      className={`md:flex md:justify-between md:py-9 md:px-28 lg:px-36 p-4`}
    >
      <div className="md:w-48 ">
        <CustomText content={headLine} />
        <div className="mb-2"></div>
        <CustomText content={tagline} />
      </div>
      <div className="md:w-48">
        <form className="mt-6 md:mt-0">
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
                    className="w-full mt-2 p-2 h-14 rounded-sm"
                  />
                </div>
              );
            })}
          <div
              className={`w-full flex ${
                buttonPosition === "right"
                  ? "justify-end"
                  : buttonPosition === "left"
                  ? "justify-start"
                  : "justify-center"
              }`}
            >
              <CustomButton content={btnDetails} />
            </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter2;
