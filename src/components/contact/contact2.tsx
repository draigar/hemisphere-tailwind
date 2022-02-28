import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import React from "react";
import urlFor from "../../helpers/imageUrlGenerator";
import { utilities } from "@web/helpers/utilities";

function Contact2({ content }: any) {
  const bgImage = content?.backgrounds?.backgroundImage?.asset?._ref;
  const imageAsset = bgImage && utilities.ImageFn(bgImage);

  const address = content?.address?.text;
  const background = content?.background?.backgroundColor;
  const email = content?.email?.text;
  const caption = content?.caption?.text;
  const heading = content?.heading?.text;
  const submitResponse =
  content?.inputElement?.submitResponse?.text && 
  content?.inputElement?.submitResponse?.text[0]?.children[0]?.text;
  const buttonType = content?.buttonType;
  const hasMargin = content?.margin?.hasMargin

  const inputElements = content?.inputElement?.inputElements;
  const inputElementColor = content?.inputElement?.inputLabelColor?.hex;

  const textInputElement = inputElements?.filter(
    (val: any) => val.type === "text"
  );
  const emailInputElement = inputElements?.filter(
    (val: any) => val.type === "email"
  );
  const textAreaInputElement = inputElements?.filter(
    (val: any) => val.type === "textArea"
  );

  const bgStyle = {
    backgroundImage: `url(${imageAsset})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className={`${hasMargin && 'lg:px-[10em]'} relative mb-10`}>
      <div style={bgStyle} className="h-64"></div>
      <div className="-mt-36 lg:w-3/5 w-4/5 flex-col md:flex-row mx-auto mb-8 bg-white p-10 shadow-lg flex justify-between">
        <div className="flex flex-col flex-2 justify-evenly w-full md:w-3/4 p-0 mb-4 lg:mb-0 md:pr-24">
          <div className="text-black font-normal mb-0 lg:mb-10">
            <CustomText content={heading} />
          </div>
          <div className="text-black font-thin lg:text-3xl mb-0 lg:mb-10 sm:text-xl">
              <CustomText content={caption} />
          </div>

          <form className="md:w-65">
            {textInputElement &&
              textInputElement.map((val: any) => {
                return (
                  <div className="" key={val._key}>
                    <label style={{ color: `${inputElementColor}` }}>{val?.inputlabel}</label>
                    <div className="mb-2"></div>
                    <input
                      type="text"
                      placeholder={val?.inputplaceholder}
                      className="border-solid border-2 rounded-sm w-full p-4 focus:outline-none focus:ring focus:ring-primary-300"
                    />
                  </div>
                );
              })}
            {emailInputElement &&
              emailInputElement.map((val: any) => {
                return (
                  <div className="mt-6" key={val._key}>
                    <label style={{ color: `${inputElementColor}` }}>{val?.inputlabel}</label>
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
                  <div className="mt-6 mb-8" key={val._key}>
                    <div style={{ color: `${inputElementColor}` }}>
                      <CustomText content={val?.inputlabel} />
                    </div>
                    <div className="mb-2"></div>
                    <textarea
                      placeholder={val?.inputplaceholder}
                      className="border-solid border-2 rounded-sm w-full p-2 h-56 bg-transparent focus:outline-none focus:ring-1 focus:ring-primary-300"
                    />
                  </div>
                );
              })}
            {buttonType && <CustomButton content={buttonType} />}
          </form>
        </div>

        <div className="flex flex-col w-full md:w-1/4 ">
          <div className="text-black font-semibold mb-10">
            <h3>Offices</h3>
          </div>
          <div>
            <CustomText content={address} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact2;
