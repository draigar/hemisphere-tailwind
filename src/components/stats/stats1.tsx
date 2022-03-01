import CustomText from "../text/customText";
import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import urlFor from "../../helpers/imageUrlGenerator";
import { utilities } from "@web/helpers/utilities";

interface props {
  content: any
}

const Stats1 = (props: props) => {
  const { content } = props
  const caption = content?.caption;
  const tagLine = content?.tagLine;
  const bgType = content?.background?.type
  const bgColor = content?.background?.backgroundColor?.hex;
  const bgImage = content?.background?.backgroundImage?.asset?._ref
  const statItemColor = content?.statItemColor?.hex;

  const hasMargin = content?.margin?.hasMargin

  const image = utilities.ImageFn(bgImage)

  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundColor: `${bgType === 'image' && bgColor}`
  };

  return (
    <div className={`${hasMargin && 'lg:px-[10em]'}`}>
      <div
        style={bgStyle}
        className={`md:p-11 lg:px-8 py-20 bg-no-repeat bg-cover`}>
        <div className="w-full lg:w-4/6 mx-auto">
          <div className="mb-4 text-center">
            <CustomText content={caption} textAlign="centered" />
          </div>

          <div className="flex justify-around lg:justify-center relative mx-auto my-12 w-full">
            {content?.statistics?.map((stat: any) => {
              return (
                <div
                  style={{ color: `${statItemColor}` }}
                  className="text-center md:basis-3/12 md:mr-5 sm:mr-10"
                  key={stat._key}
                >
                  <h3 className=" text-4xl lg:text-7xl mb-3">
                    {stat?.Number}
                  </h3>
                  <p className="text-base font-thin text-xl">
                    {stat?.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="w-full px-4 lg:p-0 lg:w-3/6 mx-auto font-thin text-center">
            <CustomText
              content={tagLine}
              textAlign="centered"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats1;
