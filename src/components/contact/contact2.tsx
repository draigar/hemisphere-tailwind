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

  const bgStyle = {
    backgroundImage: `url(${imageAsset})`,
    minHeight: "50vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="relative mb-10 h-screen">
      <div style={bgStyle}></div>
      <div className="-mt-40 lg:w-3/5 sm:w-4/5 mx-auto mb-8 bg-white p-10 shadow-lg flex justify-between">
        <div className="flex flex-col justify-evenly sm:w-full lg:w-1/2">
          <div className="text-black font-normal mb-10">
            <CustomText content={heading} />
          </div>
          <div className="text-black font-thin lg:text-3xl mb-10 sm:text-xl">
            <p>
              <CustomText content={caption} />
            </p>
          </div>

          <div className="text-black font-thin lg:text-5xl mb-10 text-zinc-500 sm:text-2xl">
            <CustomText content={email} />
          </div>
        </div>

        <div className="flex flex-col sm:w-1/2">
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
