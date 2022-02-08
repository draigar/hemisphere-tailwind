import CustomText from "../text/customText";
import Image from "next/image";
import React from "react";
import urlFor from "../../helpers/imageUrlGenerator";

function TextImageGrid({ content }: any) {
  const bodyText = content?.bodyText?.text;
  const heading = content?.heading?.text;
  const bgImage = content?.image?.Image?.asset?._ref;
  const headingLengthSize = heading?.lengthSize?.size
  const bodyTextLengthSize = bodyText?.lengthSize?.size
  const type = content?.type

  console.log(content);

  return (
    <div className="flex flex-wrap justify-between md:p-11 px-4 py-11">
      <figure className={`flex row wow animate__animated animate__slideInUp ${type === "imgRightTextLeft" ? 'flex-col lg:flex-row' : 'flex-col-reverse lg:flex-row-reverse'} bg-slate-100 rounded-xl p-8 md:p-0`} 
      data-wow-duration="1s" data-wow-delay=".7s">
        <div className="pt-6 md:p-8 px-16 text-center md:text-left space-y-4 flex flex-col flex-1 justify-center">
          <div className="w-11/12 mx-auto">
            <div className={`${headingLengthSize === 'md' ? 'w-2/6' :
              headingLengthSize === 'lg' ? 'w-2/5' : headingLengthSize === 'xl' ? 'w-2/4'
                : headingLengthSize === 'xs' ? 'w-1/5' : headingLengthSize === 'sm' ? 'w-1/4' :
                  headingLengthSize === 'xxl' ? 'w-2/3' : headingLengthSize === 'xxs' ? 'w-1/6' : '10%'}`}>
              <CustomText content={heading} />
            </div>
            <figcaption className={`font-normal mt-8 ${bodyTextLengthSize === 'md' ? 'w-2/6' :
              bodyTextLengthSize === 'lg' ? 'w-2/5' : bodyTextLengthSize === 'xl' ? 'w-2/4'
                : bodyTextLengthSize === 'xs' ? 'w-1/5' : bodyTextLengthSize === 'sm' ? 'w-1/4' :
                  bodyTextLengthSize === 'xxl' ? 'w-2/3' : bodyTextLengthSize === 'xxs' ? 'w-1/6' : '10%'} `}>
              <CustomText content={bodyText} />
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
      </figure>
    </div>
  );
}

export default TextImageGrid;
