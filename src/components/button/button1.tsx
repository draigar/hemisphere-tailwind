import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import { useRouter } from "next/router";
import Link from "next/link";

interface BtnProps {
  content: any;
}

function Button1({ content }: BtnProps) {
  const bgColor = bgColorCombo(content?.backgroundColor);
  const linkType = content?.buttonLink?.linkType;
  const internalLink = content?.buttonLink?.internalLink?._ref;
  const externalLink = content?.buttonLink?.externalUrl;
  const btnText = content?.buttontext;

  const router = useRouter();

  return (
    <>
      {linkType === "internal" ? (
        <Link href="/">
          <button className="p-4 rounded-sm bg-red-500 mt-4 inline-block hover:opacity-80">
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
