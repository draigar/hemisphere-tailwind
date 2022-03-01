import CustomText from "../text/customText";
import React from "react";
import formatter from "@web/helpers/formatter";
import urlFor from "../../helpers/imageUrlGenerator";

function Article1({ content }: any) {
  const articleBody = content?.articleBody;
  const heading = content?.heading;
  const subHeading = content?.subHeading;
  const image = content?.image?.Image?.asset?._ref;
  const datePublished = content?.datePublished;
  const author = content?.author?.text;
  const articleBorderColor = content?.articleBorderColor

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
      <div className="flex lg:mb-12">
        <div style={{ backgroundColor: `${articleBorderColor?.hex}` }} className="w-6 mr-6 "></div>
        <div>
          <h1 className="text-[32px]">{heading}</h1>
          <div className="mb-2"></div>
          <h1 style={{ color: `${articleBorderColor?.hex}` }} className="text-[16px]">{subHeading}</h1>
          <div className="mb-4"></div>
          <CustomText content={author} />
          <p className="text-neutral-1 text-[16px] font-light">{formatter.formatDate(datePublished, 'D MMMM YYYY')}</p>
        </div>
      </div>
      <div>
        <div className="mb-12">
          <CustomText content={articleBody} />
        </div>
      </div>
    </div>
  );
}

export default Article1;
