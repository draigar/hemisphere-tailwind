import React from "react";
import Image from "next/image";
import { urlFor } from "@web/helpers/imageUrlGenerator";
import { CustomText } from "../text/customText";

function Card1({ content }: any) {
  console.log("====================================");
  console.log(content);
  console.log("====================================");

  const heading = content?.heading?.text;
  const caption = content?.captionText?.text;
  const cards = content?.cards;

  return (
    <div className="md:p-11 px-4 py-11">
      <div className="mb-8">
        <CustomText content={heading} textAlign="center" />
        <CustomText content={caption} textAlign="center" />
      </div>
      <div className="flex justify-between flex-wrap">
        {cards?.map((val: any) => {
          return (
            <div className="w-full md:w-30 shadow-md mb-8">
              <div className="w-full">
                <Image
                  src={urlFor(val.Image.asset._ref).url()}
                  alt="Picture of the author"
                  width={800}
                  height={800}
                />
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <CustomText content={val?.heading?.text} textAlign="center" />
                  <CustomText
                    content={val?.subheading?.text}
                    textAlign="center"
                  />
                </div>
                <CustomText content={val?.bodyText?.text} textAlign="center" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card1;
