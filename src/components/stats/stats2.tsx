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
  console.log(content);
  console.log('====================================');

  return (
    <div 
      style={{ backgroundColor: `${bgColor}` }}
      className={` px-4 lg:px-8 py-10 lg:py-20 relative`}>
      <div className=" w-11/12 lg:w-4/5 mx-auto">
        <div className="lg:w-3/6 mb-10 lg:mb-20 md:w-full sm:w-full">
          <div className="mb-4">
            <CustomText content={caption} textAlign="left" />
          </div>
          <div className="text-xl font-thin">
            <CustomText content={tagLine} textAlign="left" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center relative mx-auto lg:my-12 w-full md:flex-col lg:flex-row">
          {content?.statistics?.map((stat: any) => {
            return (
              <div
                style={{ color: `${statItemColor}`}}
                className="lg:flex-1 text-left outline-transparent shadow-md border-2 border-black lg:mr-8 py-10 px-5 md:basis-full mb-10"
                key={stat._key}
              >
                <h3 className="text-3xl lg:text-4xl font-light mb-3">
                  {stat?.Number}
                </h3>
                <p className="text-base font-thin">{stat?.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats2;
