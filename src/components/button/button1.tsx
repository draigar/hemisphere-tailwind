import Link from "next/link";
import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import { fetchRefByDataType } from "@web/types";
import { useQueries } from "@web/hooks";
import { useRouter } from "next/router";
import { utilities } from "@web/helpers/utilities";

interface BtnProps {
  content: any;
}

const Button1 = ({ content }: BtnProps) => {
  const bgColor = content?.backgroundColor;
  const linkType = content?.buttonLink?.linkType;
  const internalLink = content?.buttonLink?.internalLink?._ref;
  const externalLink = content?.buttonLink?.externalUrl;
  const btnText = content?.buttontext;
  const [linkUrl, setLinkUrl] = React.useState('');
  const buttonColor = content?.buttonColor;

  const router = useRouter();

  const getUrl = React.useCallback(async () => {
    const obj: fetchRefByDataType = {
      document: 'page',
      ref: internalLink,
      key: '_id',
      limit: '0'
    }
    const url = await utilities.getRef(obj)
    if (url?.slug.current !== undefined) {
      setLinkUrl(url?.slug.current)
    }
  }, [internalLink])

  React.useEffect(() => {
    getUrl()
  }, [getUrl])

  const Styles = {
    backgroundColor: `${bgColor?.hex}`,
    color: `${buttonColor?.hex}`,
  }

  return (
    <>
      {linkType === "internal" ? (
        <Link href={linkUrl} passHref>
          <a>
            <button style={Styles} type="button"
              className={`text-white font-medium text-sm px-10 py-3 text-center mr-2 mb-2 
      `}>{btnText}</button>
          </a>
        </Link>
      ) : (
        <Link href={externalLink} passHref={true}>
          <button style={Styles} type="button"
            className={`text-white font-medium text-sm px-10 py-3 text-center mr-2 mb-2 
      `}>{btnText}</button>
        </Link>
      )}
    </>
  );
}

export default Button1;
