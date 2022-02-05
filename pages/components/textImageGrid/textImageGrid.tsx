import React from "react";
import Image from "next/image";
import { urlFor } from "@web/helpers/imageUrlGenerator";
import { CustomText } from "../text/customText";

function TextImageGrid({ content }: any) {
  const bodyText = content?.bodyText?.text;
  const heading = content?.heading?.text;
  const bgImage = content?.image?.Image?.asset?._ref;

  return (
    <div className="flex flex-wrap justify-between md:p-11 px-4 py-11">
      <section className="md:w-2/5 mb-6 self-center">
        <div className="mb-6">
          <CustomText content={heading} />
        </div>
        <CustomText content={bodyText} />
      </section>
      <section className="md:w-2/4 self-center relative">
        <Image
          src={urlFor(bgImage).url()}
          alt="Picture of the author"
          width={1000}
          height={1000}
        />
      </section>
    </div>
  );
}

export default TextImageGrid;
