import React from "react";
import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import urlFor from "../../helpers/imageUrlGenerator";

function Error(props: any) {
  const { content } = props;
  const bgImage = content?.background?.backgroundImage?.asset?._ref;
  const colorBg = content?.background?.backgroundColor;
  const backgroundType = content?.background?.type;
  const title = content?.title?.text;
  const description = content?.description?.text;
  const btnDetails = content?.buttonType;
  const imageAsset = bgImage && urlFor(bgImage)?.url();

  const bgStyle = {
    backgroundImage: `url(${imageAsset})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
  };
  return (
    <div
      className="flex justify-center content-center items-center"
      style={bgStyle}
    >
      <div className="text-center">
        <div className="mb-20">
          <CustomText content={title} textAlign="centeredTop" />
        </div>

        <CustomText content={description} textAlign="centeredTop" />
        <div>
          <CustomButton content={btnDetails} />
        </div>
      </div>
    </div>
  );
}

export default Error;
