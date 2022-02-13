import React from "react";
import urlFor from "../../helpers/imageUrlGenerator";
import bgColorCombo from "../../helpers/backgroundColorFn";
import CustomText from "../text/customText";

const Stats2 = ({ content }) => {
  console.log("From Stats 2", content);

  const caption = content?.caption?.text;
  const tagLine = content?.tagLine?.text;
  const bgColor = content?.background;
  const bgColorStyle = bgColorCombo(bgColor);

  console.log(bgColorStyle);

  return (
    <div className={`${bgColorStyle} md:p-11 px-8 py-20 relative`}>
      <div className="w-4/5 mx-auto">
        <div className="w-3/6 mb-20 md:w-full sm:w-full">
          <div className="text-6xl mb-4">
            <CustomText content={caption} textAlign="left" />
          </div>
          <div className="text-xl text-black font-thin">
            <CustomText content={tagLine} textAlign="left" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center relative mx-auto my-12 w-full md:flex-col lg:flex-row">
          {content?.statistics?.map((stat: any) => {
            return (
              <div
                className="lg:flex-1 text-left border-2 border-black lg:mr-8 py-10 px-5 md:basis-full md:mb-8"
                key={stat._key}
              >
                <h3 className="text-lime-900 text-6xl font-light mb-3">
                  {stat?.Number}
                </h3>
                <p className="text-base text-black font-thin">{stat?.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats2;
