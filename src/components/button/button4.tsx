import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Jquery from 'jquery';
import Link from "next/link";
import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { fetchRefByDataType } from "@web/types";
import { useRouter } from "next/router";
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
    if (url?.slug.current !== undefined) {
      console.log('====================================');
      console.log(url);
      console.log('====================================');
      setLinkUrl(url?.slug.current)
    }
  }, [internalLink])

  React.useEffect(() => {
    getUrl()
  }, [getUrl])

  return (
    <>
      {linkType === "internal" ? (
        <Link href={linkUrl}>
          <a style={Styles} className="hover-underline-animation after:hover:bg-green-500 inline-block mt-6 cursor-pointer">
            <span className="mr-2">{btnText}</span>
            <span>{arrowRight}</span>
          </a>
        </Link>
      ) : (
        <Link href={externalLink} passHref={true}>
          <a style={Styles} className=" transition ease-out duration-150 scale-100 origin-bottom-left bg-blue-600 underline hover:no-underline underline-offset-4 decoration-2 inline-block mt-6 cursor-pointer">
            <span className="mr-2">{btnText}</span>
            <span>{arrowRight}</span>
          </a>
        </Link>
      )}
    </>
  );
}

export default Button4;
