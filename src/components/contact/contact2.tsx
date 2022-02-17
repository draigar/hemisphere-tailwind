import React from "react";
import CustomText from "../text/customText";
import urlFor from "../../helpers/imageUrlGenerator";
import CustomButton from "../button/mainButton";
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
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="relative mb-10">
      <div style={bgStyle} className="h-64"></div>
      <div className="-mt-40 lg:w-3/5 sm:w-4/5 flex-row sm:flex-col md:flex-row mx-auto mb-8 bg-white p-10 shadow-lg flex justify-between">
        <div className="flex flex-col flex-2 justify-evenly sm:w-full md:w-3/4 p-0 md:pr-24">
          <div className="text-black font-normal mb-10">
            <CustomText content={heading} />
          </div>
          <div className="text-black font-thin lg:text-3xl mb-10 sm:text-xl">
              <CustomText content={caption} />
          </div>

          <div className="text-black font-thin lg:text-5xl mb-10 text-zinc-500 sm:text-2xl">
            <CustomText content={email} />
          </div>
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
