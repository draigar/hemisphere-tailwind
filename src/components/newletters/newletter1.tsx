import Button1 from "../button/button1";
import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import urlFor from "../../helpers/imageUrlGenerator";
import { utilities } from "@web/helpers/utilities";
import videoAssetFor from "@web/helpers/video-url";

interface props {
  content: any
};

function Newletter1(props: props) {
  const { content } = props;
  const bgImage = content?.background?.backgroundImage?.asset?._ref;
  const colorBg = content?.background?.backgroundColor;
  const backgroundVideo = content?.background?.backgroundVideo?.videoFile?.asset?._ref
  const backgroundType = content?.background?.type
  const headLine = content?.headLine?.text;
  const tagline = content?.tagline?.text;
  const buttonPosition = content?.buttonPosition
  const btnDetails = content?.buttonType;
  const imageAsset = bgImage && urlFor(bgImage)?.url();
  const inputElement = content?.inputElement?.inputElements;
  const submissionResponse = content?.inputElement?.submitResponse;

  console.log(content)

  const bgStyle = {
    backgroundImage: backgroundType === 'image' ? `url(${imageAsset})` : undefined,
    height: "100%",
    width: "100%",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  const RenderVideo = () => {
    const videoAsset = utilities.VideoFn(backgroundVideo)
    return (
      <div className="h-full">
        <video autoPlay loop muted id="video-bg">
          <source src={videoAsset.url} type={`video/${videoAsset.extension}`} />
        </video>
        <div className="absolute top-0 left-0 w-full bottom-0">
          <ContentComp />
        </div>
      </div>
    )
  }

  const ContentComp = () => (
    <div
      className="flex h-full justify-center items-center px-4 py-11 relative z-10"
    >
      <div className="w-1/3">
        <div className="my-8">
        <CustomText content={headLine} textAlign="centered" />
        </div>
        <CustomText content={tagline} textAlign="centered" />
        <form className="mt-8">
          {inputElement && inputElement.map((val: any, i: number) => {
            return (
              <div key={i} className="mb-4">
                <label style={{ color: `${val?.inputLabelColor.hex}` }} className="block">{val?.inputlabel}</label>
                <input
                  placeholder={val?.inputplaceholder}
                  type={val.type}
                  className="w-full mt-2 p-2 h-14 rounded-sm"
                />
              </div>
            );
          })}
          <div className={`w-full flex ${buttonPosition === 'right' ? 'justify-end' 
          : buttonPosition === 'left' ? 'justify-start' : 'justify-center' }`}>
            <CustomButton content={btnDetails} />
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="h-600px bg-black-1">
      <div style={bgStyle} className={`relative ${utilities.ColorCombo(colorBg)} h-full w-full `}>
        <div className={`${backgroundType !== 'color' && 'bg-black-1 bg-opacity-25'} z-10 h-full absolute w-full`}></div>
        {backgroundType === 'video' ? <RenderVideo /> : <ContentComp />}
      </div>
    </div>
  );
}

export default Newletter1;
