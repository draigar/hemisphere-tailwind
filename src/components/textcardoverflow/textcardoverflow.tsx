import React from "react";
import CustomText from "../text/customText";
import { utilities } from "@web/helpers/utilities";
import CustomButton from "../button/mainButton";

function Textcardoverflow({ content }: any) {
  const bgImage = content?.image?.Image?.asset?._ref;
  const imageAsset = bgImage && utilities.ImageFn(bgImage);

  const heading = content?.heading?.text;
  const bodyText = content?.bodyText?.text;
  const isCTAEnabled = content?.isCTAEnabled;
  const buttonType = content?.buttonType;

  const bgStyle = {
    backgroundImage: `url(${imageAsset})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "50vh",
  };

  return (
    <div className="relative mb-10">
      <div style={bgStyle} className="h-64"></div>
      <div className="-mt-40 md:ml-32 mx-9 lg:w-45 sm:w-4/5 mb-8 bg-white md:p-10 p-4 shadow-lg">
        <div className="">
          <div className="mb-10">
            <CustomText content={heading} />
          </div>
          <div className="">
            <CustomText content={bodyText} />
          </div>
          {isCTAEnabled && <CustomButton content={buttonType} />}
        </div>
      </div>
    </div>
  );
}

export default Textcardoverflow;
