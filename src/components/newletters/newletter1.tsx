import Button1 from "../button/button1";
import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import urlFor from "../../helpers/imageUrlGenerator";

function Newletter1({ content }: any) {
  const bgImage = content?.background?.backgroundImage?.asset?._ref;
  const colorBg = content?.background?.backgroundColor;

  const backgroundType = content?.background?.type

  const headLine = content?.headLine?.text;
  const tagline = content?.tagline?.text;

  const btnDetails = content?.buttonType;

  const imageAsset = urlFor(bgImage).url();

  const inputElement = content?.inputElement?.inputElements;
  const submissionResponse = content?.inputElement?.submitResponse;

  console.log('====================================');
  console.log(backgroundType);
  console.log('====================================');

  const bgStyle = {
    backgroundImage: backgroundType === 'image' ? `url(${imageAsset})` : undefined,
    minHeight: "80vh",
    backgroundSize: '100% 100%'
  };

  const bgOverlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    minHeight: "80vh",
  };

  return (
    <div style={bgStyle} className={`bg-no-repeat ${bgColorCombo(colorBg)} bg-red-500`}>
      <div
          className="flex h-full justify-center items-center px-4 py-11"
        >
          <div>
            <CustomText content={headLine} textAlign="center" />
            <CustomText content={tagline} textAlign="center" />
            <form>
              {inputElement.map((val: any, i: number) => {
                return (
                  <div key={i} className="mb-4">
                    <label className="block">{val?.inputlabel}</label>
                    <input
                      placeholder={val?.inputplaceholder}
                      type={val.type}
                      className="w-full mt-2 p-2 rounded-sm"
                    />
                  </div>
                );
              })}
              <CustomButton content={btnDetails} />
            </form>
          </div>
        </div>
    </div>
  );
}

export default Newletter1;
