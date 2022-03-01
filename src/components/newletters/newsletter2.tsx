import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import urlFor from "../../helpers/imageUrlGenerator";
import { utilities } from "../../helpers/utilities";

interface props {
  content: any
}

function Newsletter2(props: props) {
  const { content } = props;

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
  const submissionResponse = content?.inputElement?.submitResponse;


  // const bgColor = utilities.ColorCombo(colorBg);

  const bgStyle = {
    backgroundImage:
      backgroundType === "image" ? `url(${imageAsset})` : undefined,
    backgroundColor: backgroundType === "color" ? `${colorBg}` : undefined,
    height: "100%",
    width: "100%",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  return (
    <div
      style={bgStyle}
      className={`md:flex md:justify-between py-4 md:py-9 md:px-28 lg:px-36 p-4`}
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
                <div key={i} className="flex items-end">
                  <div className="flex flex-1 flex-col mr-4">
                    <label
                      style={{ color: `${val?.inputLabelColor?.hex}` }}
                      className="block"
                    >
                      {val?.inputlabel}
                    </label>
                    <input
                      placeholder={val?.inputplaceholder}
                      type={val.type}
                      className="w-full mt-2 p-2 h-12 rounded-sm"
                    />
                  </div>
                  <div className="relative top-1">
                    <CustomButton content={btnDetails} />
                  </div>
                </div>
              );
            })}
        </form>
      </div>
    </div>
  );
}

export default Newsletter2;
