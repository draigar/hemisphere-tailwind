import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import { useRouter } from "next/router";
import Link from "next/link";

interface BtnProps {
  content: any;
}

function Button2({ content }: BtnProps) {
  const linkType = content?.buttonLink?.linkType;
  const internalLink = content?.buttonLink?.internalLink?._ref;
  const externalLink = content?.buttonLink?.externalUrl;
  const btnText = content?.buttontext;

  const router = useRouter();

  const borderColor = bgColorCombo(content?.borderColor);

  return (
    <>
      {linkType === "internal" ? (
        <Link href="/">
          <button className="p-4 rounded-sm border-solid mt-4 border-2 border-primary-500 hover:opacity-100">
            {btnText}
          </button>
        </Link>
      ) : (
        <Link href={externalLink} passHref={true}>
          <button className="p-4 rounded-sm border-solid mt-4 mt-4 border-2 border-primary-500 hover:opacity-100">
            {btnText}
          </button>
        </Link>
      )}
    </>
  );
}

export default Button2;
