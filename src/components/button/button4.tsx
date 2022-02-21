import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import { useRouter } from "next/router";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchRefByDataType } from "@web/types";
import { utilities } from "@web/helpers/utilities";

interface BtnProps {
  content: any;
}

function Button4({ content }: BtnProps) {
  const linkType = content?.buttonLink?.linkType;
  const internalLink = content?.buttonLink?.internalLink?._ref;
  const externalLink = content?.buttonLink?.externalUrl;
  const btnText = content?.buttontext;
  const buttonColor = content?.buttonColor;

  const arrowRight = <FontAwesomeIcon icon={faArrowRight} />;

  const router = useRouter();

  const Styles = {
    color: `${buttonColor?.hex}`
  }

  const [linkUrl, setLinkUrl] = React.useState('');

  const getUrl = React.useCallback(async () => {
    const obj: fetchRefByDataType = {
      document: 'page',
      ref: internalLink,
      key: '_id',
      limit: '0'
    }
    const url = await utilities.getRef(obj)
    setLinkUrl(url.slug.current)
  }, [internalLink])

  React.useEffect(() => {
    getUrl()
  }, [getUrl])

  return (
    <>
      {linkType === "internal" ? (
        <Link href={linkUrl}>
          <a style={Styles} className="border-b-4 border-neutral-1 underline hover:no-underline underline-offset-4 inline-block mt-6 cursor-pointer">
            <span className="mr-2">{btnText}</span>
            <span>{arrowRight}</span>
          </a>
        </Link>
      ) : (
        <Link href={externalLink} passHref={true}>
          <a style={Styles} className="border-b-4 border-neutral-1 underline hover:no-underline underline-offset-4 decoration-2 inline-block mt-6 cursor-pointer">
            <span className="mr-2">{btnText}</span>
            <span>{arrowRight}</span>
          </a>
        </Link>
      )}
    </>
  );
}

export default Button4;
