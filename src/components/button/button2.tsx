import Link from "next/link";
import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import classNames from 'classnames';
import { useRouter } from "next/router";
import { utilities } from "@web/helpers/utilities";
import { fetchRefByDataType } from "@web/types";
interface BtnProps {
  content: any;
}

function Button2({ content }: BtnProps) {
  const linkType = content?.buttonLink?.linkType;
  const internalLink = content?.buttonLink?.internalLink?._ref;
  const externalLink = content?.buttonLink?.externalUrl;
  const btnText = content?.buttontext;
  const buttonColor = content?.buttonColor
  const borderColor = content?.borderColor;
  const [linkUrl, setLinkUrl] = React.useState('');

  const router = useRouter();

  const style = {
    color: `${buttonColor?.hex}`,
    borderColor: `${borderColor?.hex}`,
  }

  const className = classNames(`hover:text-white border-2 
  hover:underline underline-offset-4 decoration-2
  font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2`)

  const getUrl = React.useCallback(async () => {
    const obj: fetchRefByDataType = {
      document: 'page',
      ref: internalLink,
      key: '_id',
      limit: '0'
    }
    const url = await utilities.getRef(obj)
    setLinkUrl(url?.slug.current !== undefined ? url?.slug.current : '/')
  }, [internalLink])

  React.useEffect(() => {
    getUrl()
  }, [getUrl])

  return (
    <>
      {linkType === "internal" ? (
        <Link href={linkUrl} passHref>
          <button type="button" style={style} className={`hover:text-white border-2 
          border-${borderColor}  hover:bg-${borderColor}
          font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2`}>{btnText}</button>
        </Link>
      ) : (
        <Link href={externalLink} passHref={true}>
          <button type="button" style={style} className={className}>{btnText}</button>
        </Link>
      )}
    </>
  );
}

export default Button2;
