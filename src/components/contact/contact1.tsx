import React from "react";
import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";

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

  return (
    <div className="p-6  md:px-12 py-12 bg-primary-500 lg:px-32">
      <div>
        <CustomText content={heading} />
        <div className="mb-2"></div>
        <CustomText content={caption} />
      </div>
      <div className="md:flex md:justify-between md:flex-row-reverse mt-6">
        <div className="md:w-30 self-center">
          <CustomText content={address} />
          <CustomText content={email} />
        </div>
        <form className="md:w-65">
          {textInputElement &&
            textInputElement.map((val: any) => {
              return (
                <div className="">
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
                <div className="mt-6">
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
                <div className="mt-6">
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
    </div>
  );
}

export default Contact1;
