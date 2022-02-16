import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import { useRouter } from "next/router";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BtnProps {
  content: any;
}

function Button3({ content }: BtnProps) {
  const bgColor = bgColorCombo(content?.backgroundColor);
  const linkType = content?.buttonLink?.linkType;
  const internalLink = content?.buttonLink?.internalLink?._ref;
  const externalLink = content?.buttonLink?.externalUrl;
  const btnText = content?.buttontext;

  const arrowRight = <FontAwesomeIcon icon={faArrowRight} />;

  return (
    <>
      {linkType === "internal" ? (
        <Link href="/">
          <div className="flex cursor-pointer mt-6 ">
            <div className="bg-primary-400 py-6 px-8 hover:opacity-80 rounded-l-sm">
              {btnText}
            </div>
            <div className="bg-primary-100 py-6 px-8 hover:opacity-80 rounded-r-sm">
              {arrowRight}
            </div>
          </div>
        </Link>
      ) : (
        <Link href={externalLink} passHref={true}>
          <div className="flex cursor-pointer mt-6">
            <div className="bg-primary-400 py-6 px-8 hover:opacity-80">
              {btnText}
            </div>
            <div className="bg-primary-100 py-6 px-8 hover:opacity-80">
              {arrowRight}
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default Button3;
