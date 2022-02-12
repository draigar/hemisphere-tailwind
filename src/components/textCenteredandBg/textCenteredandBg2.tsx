import React from "react";
import urlFor from "../../helpers/imageUrlGenerator";
import CustomText from "../text/customText";
import bgColorCombo from "../../helpers/backgroundColorFn";
import CustomButton from "../button/mainButton";

function TextCenteredandBg2({ content }: any) {
  const bgImage = content?.background?.backgroundImage?.asset?._ref;
  const imageAsset = bgImage && urlFor(bgImage)?.url();

  const bgColor = content?.background?.backgroundColor;

  const backgroundType = content?.background?.type;

  const bodyText = content?.bodyText?.text;
  const heading = content?.heading?.text;

  const isCTAEnabled = content?.isCTAEnabled;
  const buttonType = content?.buttonType;

  const bgStyle = {
    backgroundImage:
      backgroundType === "image" ? `url(${imageAsset})` : undefined,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const bgOverlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    minHeight: "100vh",
  };

  return (
    <div style={bgStyle}>
      <div style={bgOverlayStyle} className="">
        <div className="md:w-2/3 pt-12 px-6">
          <CustomText content={heading} textAlign="centeredTop" />
          <div className="mb-4"></div>
          <CustomText content={bodyText} textAlign="" />
          {isCTAEnabled && <CustomButton content={buttonType} />}
        </div>
      </div>
    </div>
  );
}

export default TextCenteredandBg2;
