import React from "react";
import CustomText from "../text/customText";
import urlFor from "../../helpers/imageUrlGenerator";
import CustomButton from "../button/mainButton";

function Contact2({ content }: any) {
  const bgImage = content?.background?.backgroundImage?.asset?._ref;
  const imageAsset = bgImage && urlFor(bgImage)?.url();

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

  console.log(imageAsset);

  const bgStyle = {
    backgroundImage: `url(${imageAsset})`,
    minHeight: "50vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div style={bgStyle}></div>
      <div className="flex justify-center content-center items-center">
        <div>
          <div
            className="bg-white py-6 px-6 mx-4 rounded md:flex md:justify-between"
            style={{ marginTop: inputElements ? "-10rem" : "-5rem" }}
          >
            <div className="md:w-45">
              <CustomText content={heading} />
              <div className="mb-4"></div>
              <CustomText content={caption} />
              <div className="mb-4"></div>
              <CustomText content={email} />
            </div>
            <div className="md:w-45 self-center">
              <CustomText content={address} />
            </div>
          </div>
          <form className="md:w-45 py-6 px-12">
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
    </div>
  );
}

export default Contact2;
