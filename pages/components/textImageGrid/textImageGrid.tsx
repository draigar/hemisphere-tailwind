import { CustomText } from "../text/customText";
import Image from "next/image";
import React from "react";
import { urlFor } from "@web/helpers/imageUrlGenerator";

function TextImageGrid({ content }: any) {
  const bodyText = content?.bodyText?.text;
  const heading = content?.heading?.text;
  const bgImage = content?.image?.Image?.asset?._ref;

  console.log(bgImage);

  return (
    <div className="flex flex-wrap justify-between md:p-11 px-4 py-11">
      <section className="md:w-2/5 mb-6 self-center flex flex-col flex-1">
        <div className="mb-6">
          <CustomText content={heading} />
        </div>
        <CustomText content={bodyText} />
      </section>
      <section className="md:w-2/4 self-center relative">
        {bgImage !== undefined && <Image
          src={urlFor(bgImage).url()}
          alt="Picture of the author"
          width="500px"
          height="500px"
        />}
      </section>
    </div>
  );
}

export default TextImageGrid;
