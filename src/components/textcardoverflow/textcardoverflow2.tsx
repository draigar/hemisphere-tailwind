import React from "react";
import { utilities } from "@web/helpers/utilities";
import CustomText from "../text/customText";
import CustomButton from "../button/mainButton";

function Textcardoverflow2({ content }: any) {
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
    minHeight: "70vh",
  };

  const textBgSTyle = {
    backgroundColor: "#000000",
    opacity: 0.6,
  };

  return (
    <div style={bgStyle}>
      <div className="pt-16">
        <div className="text-center">
          <CustomText content={heading} textAlign="centeredTop" />
        </div>
        <div className="flex content-center justify-center items-center">
          <div
            className="ml-auto w-65 md:w-45 p-4 mr-4 rounded mt-9 text-white"
            style={textBgSTyle}
          >
            <CustomText content={bodyText} />
            {isCTAEnabled && <CustomButton content={buttonType} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Textcardoverflow2;
