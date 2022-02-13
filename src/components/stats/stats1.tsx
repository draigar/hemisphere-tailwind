import React from "react";
import urlFor from "../../helpers/imageUrlGenerator";
import bgColorCombo from "../../helpers/backgroundColorFn";
import CustomText from "../text/customText";

const Stats1 = ({ content }) => {
  const caption = content?.caption?.type;
  const tagLine = content?.tagLine;
  const bgColor = content?.background?.backgroundColor;
  const bgColorStyle = bgColorCombo(bgColor);

  return (
    <div className={`${bgColorStyle} md:p-11 px-8 py-20`}>
      <div className="w-4/6 mx-auto">
        <div className="text-center">
          <h2 className="text-6xl text-white mb-8">{content?.caption?.Text}</h2>
          {/* <CustomText content={caption} textAlign="center" /> */}
          <p className="text-base text-white font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ullam
            a magni adipisci magnam ipsum accusantium fugit error beatae impedit
            veniam doloremque ut nostrum blanditiis, ratione, quod, nam
            provident dicta aut cumque culpa soluta? Enim quisquam delectus
            officia, sunt laboriosam hic obcaecati eos suscipit ullam. A velit
            blanditiis mollitia esse.
          </p>
        </div>

        <div className="flex justify-center relative mx-auto my-12 w-full">
          {content?.statistics?.map((stat: any) => {
            return (
              <div
                className="lg:flex-1 text-center md:basis-3/12 md:mr-5 sm:mr-10"
                key={stat._key}
              >
                <h3 className="text-white lg:text-9xl mb-3 md:text-6xl sm:text-6xl">
                  {stat?.Number}
                </h3>
                <p className="lg:text-base text-white font-thin">
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
