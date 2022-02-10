import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import { useRouter } from "next/router";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BtnProps {
  content: any;
}

function Button4({ content }: BtnProps) {
  const linkType = content?.buttonLink?.linkType;
  const internalLink = content?.buttonLink?.internalLink?._ref;
  const externalLink = content?.buttonLink?.externalUrl;
  const btnText = content?.buttontext;

  const arrowRight = <FontAwesomeIcon icon={faArrowRight} />;

  const router = useRouter();

  return (
    <>
      {linkType === "internal" ? (
        <Link href="/">
          <p className="border-b-4 border-neutral-1 inline-block mt-6 cursor-pointer">
            <span className="mr-2">{btnText}</span>
            <span>{arrowRight}</span>
          </p>
        </Link>
      ) : (
        <Link href={externalLink} passHref={true}>
          <p className="border-b-4 border-neutral-1 inline-block mt-6 cursor-pointer">
            <span className="mr-2">{btnText}</span>
            <span>{arrowRight}</span>
          </p>
        </Link>
      )}
    </>
  );
}

export default Button4;
