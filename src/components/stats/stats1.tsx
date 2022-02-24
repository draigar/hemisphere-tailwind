import React from "react";
import urlFor from "../../helpers/imageUrlGenerator";
import bgColorCombo from "../../helpers/backgroundColorFn";
import CustomText from "../text/customText";

const Stats1 = ({ content } : any) => {
  const caption = content?.caption;
  const tagLine = content?.tagLine;
  const bgColor = content?.background?.backgroundColor.hex;
  const statItemColor = content?.statItemColor?.hex;




  return (
    <div 
      style={{ backgroundColor: `${bgColor}` }}
      className={`md:p-11 px-8 py-20`}>
      <div className="w-4/6 mx-auto">
        <div className="mb-4 text-center">
          <CustomText content={caption} textAlign="centered" />
        </div>
        <div className="w-3/6 mx-auto font-thin text-center">
          <CustomText
              content={tagLine}
              textAlign="centered"
            />
          </div>

        <div className="flex justify-center relative mx-auto my-12 w-full">
          {content?.statistics?.map((stat: any) => {
            return (
              <div
                style={{ color: `${statItemColor}`}}
                className="lg:flex-1 text-center md:basis-3/12 md:mr-5 sm:mr-10"
                key={stat._key}
              >
                <h3 className="text-7xl mb-3">
                  {stat?.Number}
                </h3>
                <p className="text-base font-thin text-xl">
                  {stat?.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats1;
