import React from "react";
import { utilities } from "@web/helpers/utilities";
import CustomText from "../text/customText";
import CustomButton from "../button/mainButton";

function TextCardOverflow2({ content }: any) {
  const bgImage = content?.image?.Image?.asset?._ref;
  const imageAsset = bgImage && utilities.ImageFn(bgImage);

  const bodyText = content?.bodyText?.text;
  const heading = content?.heading?.text;

  const isCTAEnabled = content?.isCTAEnabled;
  const buttonType = content?.buttonType;

  const bgStyle = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${imageAsset})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const textBgSTyle = {
    backgroundColor: "#000000",
    opacity: 0.6,
  };

  console.log('=========  Text Card Overflow =========');
  console.log(content);
  console.log('==================');

  return (
    <div style={bgStyle} className="h-700px">
      <div className="pt-16 h-full">
        <div className="flex flex-col items-end justify-end px-8 py-12 h-full">
          <div className="w-full md:w-45">
              <CustomText content={heading} />
            <div
              className="w-full p-4 mr-4 mt-9 mb-14"
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
