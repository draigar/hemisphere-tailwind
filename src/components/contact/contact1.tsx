import React from "react";
import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import bgColorCombo from "@web/helpers/backgroundColorFn";

function Contact1({ content }: any) {
  const address = content?.address?.text;
  const background = content?.background?.backgroundColor;
  const email = content?.email?.text;
  const caption = content?.caption?.text;
  const heading = content?.heading?.text;
  const submitResponse =
    content?.inputElement?.submitResponse?.text[0]?.children[0]?.text;
  const buttonType = content?.buttonType;

  const inputElements = content?.inputElement?.inputElements;

  const textInputElement = inputElements?.filter(
    (val: any) => val.type === "text"
  );
  const emailInputElement = inputElements?.filter(
    (val: any) => val.type === "email"
  );
  const textAreaInputElement = inputElements?.filter(
    (val: any) => val.type === "textArea"
  );

  const bgColor = content?.background?.backgroundColor;
  const bgColorStyle = bgColorCombo(bgColor);

  return (
    <div className="relative min-h-full">
      <div
        className={`${bgColorStyle} lg:px-10 lg:py-20 w-full flex flex-col items-center justify-around md:px-10 md:py-20 sm:px-10 sm:py-10 sm:flex-col  md:flex-col lg:flex-row`}
      >
        <div className="basis-2/4 w-full">
          <div className="text-white font-light mb-10 text-4xl">
            <CustomText content={heading} />
          </div>
          <div className="text-white font-thin text-2xl mb-10">
            <CustomText content={caption} />
          </div>

          <form className="md:w-65">
            {textInputElement &&
              textInputElement.map((val: any) => {
                return (
                  <div className="" key={val._key}>
                    <label>{val?.inputlabel}</label>
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
                    <label>{val?.inputlabel}</label>
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
                  <div className="mt-6" key={val._key}>
                    <CustomText content={val?.inputlabel} />
                    <div className="mb-2"></div>
                    <textarea
                      placeholder={val?.inputplaceholder}
                      className="border-solid border-2 rounded-sm w-full p-2 focus:outline-none focus:ring focus:ring-primary-300"
                    />
                  </div>
                );
              })}
            {buttonType && <CustomButton content={buttonType} />}
          </form>
        </div>

        <div className="sm:w-2/4 lg:w-fit justify-self-end sm:self-start md:self-center">
          <div className="text-white font-semibold mb-10">
            <h3>Location</h3>
          </div>
          <div className="text-white">
            <CustomText content={address} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact1;
