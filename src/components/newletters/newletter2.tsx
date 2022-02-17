import React from "react";
import urlFor from "../../helpers/imageUrlGenerator";
import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import bgColorCombo from "../../helpers/backgroundColorFn";
import { utilities } from "../../helpers/utilities";

function Newsletter2({ content }: any) {
  console.log(content);

  const bgImage = content?.background?.backgroundImage?.asset?._ref;
  const colorBg = content?.background?.backgroundColor;
  const backgroundVideo =
    content?.background?.backgroundVideo?.videoFile?.asset?._ref;
  const backgroundType = content?.background?.type;
  const headLine = content?.headLine?.text;
  const tagline = content?.tagline?.text;
  const buttonPosition = content?.buttonPosition;
  const btnDetails = content?.buttonType;
  const imageAsset = bgImage && urlFor(bgImage)?.url();
  const inputElement = content?.inputElement?.inputElements;
  const submissionResponse = content?.inputElement?.submitResponse;

  const textInputElement = inputElement?.filter(
    (val: any) => val.type === "text"
  );
  const emailInputElement = inputElement?.filter(
    (val: any) => val.type === "email"
  );
  const textAreaInputElement = inputElement?.filter(
    (val: any) => val.type === "textArea"
  );

  const bgColor = utilities.ColorCombo(colorBg);

  return (
    <div
      className={`md:flex md:justify-between ${bgColor} md:py-9 md:px-28 lg:px-36 p-4`}
    >
      <div className="md:w-48 ">
        <CustomText content={headLine} />
        <div className="mb-2"></div>
        <CustomText content={tagline} />
      </div>
      <div className="md:w-48">
        <form className="mt-6 md:mt-0">
          {textInputElement &&
            textInputElement.map((val: any) => {
              return (
                <div className="mb-6" key={val._key}>
                  <label style={{ color: `${val?.inputLabelColor?.hex}` }}>
                    {val?.inputlabel}
                  </label>
                  <div className="mb-2"></div>
                  <input
                    type="text"
                    placeholder={val?.inputplaceholder}
                    className="border-solid border-2 rounded-sm w-full p-2 focus:outline-none focus:ring focus:ring-primary-300"
                  />
                </div>
              );
            })}
          {emailInputElement &&
            emailInputElement.map((val: any) => {
              return (
                <div className="mb-6" key={val._key}>
                  <label style={{ color: `${val?.inputLabelColor?.hex}` }}>
                    {val?.inputlabel}
                  </label>
                  <div className="mb-2"></div>
                  <input
                    type="email"
                    placeholder={val?.inputplaceholder}
                    className="border-solid border-2 rounded-sm w-full p-2 focus:outline-none focus:ring focus:ring-primary-300"
                  />
                </div>
              );
            })}
          {textAreaInputElement &&
            textAreaInputElement.map((val: any) => {
              return (
                <div className="mb-6" key={val._key}>
                  <label style={{ color: `${val?.inputLabelColor?.hex}` }}>
                    {val?.inputlabel}
                  </label>
                  <div className="mb-2"></div>
                  <textarea
                    placeholder={val?.inputplaceholder}
                    className="border-solid border-2 rounded-sm w-full p-2 focus:outline-none focus:ring focus:ring-primary-300"
                  />
                </div>
              );
            })}
          <CustomButton content={btnDetails} />
        </form>
      </div>
    </div>
  );
}

export default Newsletter2;
