import React from "react";
import CustomText from "../text/customText";
import { utilities } from "@web/helpers/utilities";
import CustomButton from "../button/mainButton";

interface props {
  content: any;
}

function TextCardOverflow(props: props) {
  const { content } = props;
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
    <div className="relative mb-10 ">
      <div style={bgStyle} className="h-64"></div>
      <div className=" -mt-60 md:ml-32 mx-9  w-4/5 lg:w-1/4 md:p-10 p-4 shadow-lg bg-white">
        <div className="">
          <div className="mb-4">
            <CustomText content={heading} />
          </div>
          <div className="text-md">
            <CustomText content={bodyText} />
          </div>
          {isCTAEnabled && <CustomButton content={buttonType} />}
        </div>
      </div>
    </div>
  );
}

export default TextCardOverflow;
