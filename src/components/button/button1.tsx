import Link from "next/link";
import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import { useRouter } from "next/router";
import { utilities } from "@web/helpers/utilities";

interface BtnProps {
  content: any;
}

function Button1({ content }: BtnProps) {
  const bgColor = utilities.ButtonColorFn(content?.backgroundColor);
  const linkType = content?.buttonLink?.linkType;
  const internalLink = content?.buttonLink?.internalLink?._ref;
  const externalLink = content?.buttonLink?.externalUrl;
  const btnText = content?.buttontext;

  const router = useRouter();

  return (
    <>
      <button type="button"
        className={`text-white ${bgColor} focus:ring-4 
          focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 
      `}>Default</button>
      {linkType === "internal" ? (
        <Link href="/">
          <button
            className="p-4 rounded-sm bg-red-500 mt-4 inline-block hover:opacity-80"
          // className={`p-4 rounded-sm ${bgColor} mt-4 inline-block hover:opacity-80`}
          >
            {btnText}
          </button>
        </Link>
      ) : (
        <Link href={externalLink} passHref={true}>
          <button className="p-4 rounded-sm bg-red-500 mt-4 inline-block hover:opacity-80">
            {btnText}
          </button>
        </Link>
      )}
    </>
  );
}

export default Button1;
