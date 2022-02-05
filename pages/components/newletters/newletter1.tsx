import React from "react";
import { urlFor } from "@web/helpers/imageUrlGenerator";
import { CustomText } from "../text/customText";
import { bgColorCombo } from "../../helpers/backgroundColorFn";
import Button1 from "../button/button1";
import CustomButton from "../button/mainButton";

function Newletter1({ content }: any) {
  const bgImage = content?.background?.backgroundImage?.asset?._ref;
  const colorBg = content?.background?.backgroundColor;

  const headLine = content?.headLine?.text;
  const tagline = content?.tagline?.text;

  const btnDetails = content?.buttonType;

  const imageAsset = urlFor(bgImage).url();

  const inputElement = content?.inputElement?.inputElements;
  const submissionResponse = content?.inputElement?.submitResponse;

  const bgStyle = {
    backgroundImage: `url(${imageAsset})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    minHeight: "80vh",
  };

  const bgOverlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    minHeight: "80vh",
  };

  const bgColorStyle = {
    backgroundColor: bgColorCombo(colorBg),
  };

  return (
    <div style={bgImage && bgStyle}>
      <div style={colorBg && bgColorStyle}>
        <div
          style={bgImage && bgOverlayStyle}
          className="flex justify-center content-center items-center px-4 py-11"
        >
          <div>
            <CustomText content={headLine} textAlign="center" />
            <CustomText content={tagline} textAlign="center" />
            <form>
              {inputElement.map((val: any) => {
                return (
                  <div className="mb-4">
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
    </div>
  );
}

export default Newletter1;
