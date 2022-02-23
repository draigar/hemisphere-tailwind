import React from "react";
import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import urlFor from "../../helpers/imageUrlGenerator";
import ErrorLayout from "@web/layouts/error";
import { SiteMetaConfigType } from "@web/types";
import { useRouter } from "next/router";

interface ErrorProps {
  content?: any;
  siteMetaData: SiteMetaConfigType
}

function Error(props: ErrorProps) {
  const { content, siteMetaData } = props;
  const bgImage = content?.background?.backgroundImage?.asset?._ref;
  const colorBg = content?.background?.backgroundColor;
  const backgroundType = content?.background?.type;
  const title = content?.title?.text;
  const description = content?.description?.text;
  const btnDetails = content?.buttonType;
  const imageAsset = bgImage && urlFor(bgImage)?.url();
  const router = useRouter();

  console.log('====================================');
  console.log(router);
  console.log('====================================');

  const bgStyle = {
    backgroundImage: `url(${imageAsset})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
  };

  const siteData = {
    title: siteMetaData.title,
    openGraphImage: siteMetaData.openGraphImage,
    description: siteMetaData.description,
    slug: 'Error assessing this page'
  }

  return (
    <ErrorLayout siteConfig={siteData}>
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
    </ErrorLayout>
  );
}

export default Error;
