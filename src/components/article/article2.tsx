import React from "react";
import CustomText from "../text/customText";
import urlFor from "../../helpers/imageUrlGenerator";

function Article2({ content }: any) {
  const articleBody = content?.articleBody?.text;
  const heading = content?.heading?.text;
  const subHeading = content?.subHeading?.text;
  const image = content?.image?.Image?.asset?._ref;
  const datePublished = content?.datePublished;
  const author = content?.author?.text;

  const imageAsset = image && urlFor(image)?.url();

  const bgStyle = {
    backgroundImage: `url(${imageAsset})`,
    minHeight: "50vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="md:px-32 md:py-12 p-6">
      <div className=" mb-12">
        <div>
          <CustomText content={heading} />
          <CustomText content={subHeading} />
          <CustomText content={author} />
          <p className="text-neutral-1">{datePublished}</p>
        </div>
      </div>
      <div>
        <div className="mb-12">
          <CustomText content={articleBody} />
        </div>
        <div style={bgStyle}></div>
      </div>
    </div>
  );
}

export default Article2;
