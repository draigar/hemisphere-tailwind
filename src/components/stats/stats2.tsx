import React from "react";
import urlFor from "../../helpers/imageUrlGenerator";
import bgColorCombo from "../../helpers/backgroundColorFn";
import CustomText from "../text/customText";

const Stats2 = ({ content }: any) => {
  const caption = content?.caption;
  const tagLine = content?.tagLine;
  const bgColor = content?.background?.backgroundColor.hex;
  const statItemColor = content?.statItemColor?.hex;

  console.log('====================================');
  console.log(content?.statItemColor.hex);
  console.log('====================================');
  console.log(tagLine);
  console.log('====================================');

  return (
    <div 
      style={{ backgroundColor: `${bgColor}` }}
      className={`md:p-11 px-8 py-20 relative`}>
      <div className="w-4/5 mx-auto">
        <div className="lg:w-3/6 mb-20 md:w-full sm:w-full">
          <div className="lg:text-5xl mb-4 md:text-6xl sm:text-6xl">
            <CustomText content={caption} textAlign="left" />
          </div>
          <div className="text-xl font-thin">
            <CustomText content={tagLine} textAlign="left" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center relative mx-auto my-12 w-full md:flex-col lg:flex-row">
          {content?.statistics?.map((stat: any) => {
            return (
              <div
                style={{ color: `${statItemColor}`}}
                className="lg:flex-1 text-center outline-transparent shadow-md border-2 border-black lg:mr-8 py-10 px-5 md:basis-full mb-10"
                key={stat._key}
              >
                <h3 className="text-7xl font-light mb-3">
                  {stat?.Number}
                </h3>
                <p className="text-base font-thin text-xl">{stat?.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats2;
