import CustomButton from "../button/mainButton";
import CustomText from "../text/customText";
import Image from "next/image";
import MarginSizing from "../../helpers/marginSizing";
import React from "react";
import urlFor from "../../helpers/imageUrlGenerator";

const TextImageGrid = ({ content }: any) => {
  const bodyText = content?.bodyText?.text;
  const heading = content?.heading?.text;
  const bgImage = content?.image?.Image?.asset?._ref;
  const headingLengthSize = heading?.lengthSize?.size
  const bodyTextLengthSize = bodyText?.lengthSize?.size
  const imagePositon = content?.imagePositon
  const marginSize = content?.margin

  console.log(content);

  return (
    <div className={`flex flex-wrap justify-between md:p-11 px-4 py-11 ${MarginSizing(marginSize)} `}>
      <figure className={`flex row wow animate__animated animate__slideInUp ${imagePositon === "right" ? 'flex-col lg:flex-row' : 'flex-col-reverse lg:flex-row-reverse'} bg-slate-100 rounded-xl p-8 md:p-0`} 
      data-wow-duration="1s" data-wow-delay=".7s">
        <div className="pt-16 md:p-8 px-16 md:text-left space-y-4 flex flex-col flex-1">
          <div className="w-11/12 mx-auto">
            <div className={` mt-16 ${headingLengthSize === 'md' ? 'w-2/6' :
              headingLengthSize === 'lg' ? 'w-2/5' : headingLengthSize === 'xl' ? 'w-2/4'
                : headingLengthSize === 'xs' ? 'w-1/5' : headingLengthSize === 'sm' ? 'w-1/4' :
                  headingLengthSize === 'xxl' ? 'w-2/3' : headingLengthSize === 'xxs' ? 'w-1/6' : '10%'}`}>
              <CustomText content={heading} />
            </div>
            <figcaption className={`font-normal mt-8 text-justify ${bodyTextLengthSize === 'md' ? 'w-2/6' :
              bodyTextLengthSize === 'lg' ? 'w-2/5' : bodyTextLengthSize === 'xl' ? 'w-2/4'
                : bodyTextLengthSize === 'xs' ? 'w-1/5' : bodyTextLengthSize === 'sm' ? 'w-1/4' :
                  bodyTextLengthSize === 'xxl' ? 'w-2/3' : bodyTextLengthSize === 'xxs' ? 'w-1/6' : '10%'} `}>
              <CustomText content={bodyText} classNames="text-right" />
            </figcaption>
          </div>
        </div>
        {bgImage !== undefined && <Image
          src={urlFor(bgImage).url()}
          alt="Picture of the author"
          className="md:rounded-none rounded-full mx-auto"
          width="635"
          height="760"
        />}
        {/* <img src={urlFor(bgImage).url()} alt="Text and image picture" /> */}
        {/* <CustomButton /> */}
      </figure>
    </div>
  );
}

export default TextImageGrid;
