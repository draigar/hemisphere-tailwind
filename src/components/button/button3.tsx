import {ArrowRight} from 'react-feather';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import bgColorCombo from "../../helpers/backgroundColorFn";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { fetchRefByDataType } from '@web/types';
import { useRouter } from "next/router";
import { utilities } from '@web/helpers/utilities';

interface BtnProps {
  content: any;
}

function Button3({ content }: BtnProps) {
  const bgColor = content?.backgroundColor;
  const linkType = content?.buttonLink?.linkType;
  const internalLink = content?.buttonLink?.internalLink?._ref;
  const externalLink = content?.buttonLink?.externalUrl;
  const btnText = content?.buttontext;
  const buttonBgRgb = bgColor?.rgb
  const buttonColor = content?.buttonColor;
  const secondaryBackgroundColor = content?.secondaryBackgroundColor

  const arrowRight = <ArrowRight size={30} />;

  const [linkUrl, setLinkUrl] = React.useState('/');

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

  const Styles = {
    backgroundColor: `${bgColor?.hex}`,
    color: `${buttonColor?.hex}`,
  }
  const Styles2 = {
    backgroundColor: `${secondaryBackgroundColor !== undefined ? secondaryBackgroundColor?.hex : 'white'}`,
    color: `${buttonColor?.hex}`,
  }

  return (
    <>
      {linkType === "internal" ? (
        <Link href={linkUrl} passHref>
          <div className="flex cursor-pointer mt-6 ">
            <div style={Styles} className={` py-2 md:py-4 lg:py-6 px-4 md:px-6 lg:px-8 hover:opacity-80 rounded-l-sm`}>
              {btnText}
            </div>
            <div className="bg-primary-100 py-2 md:py-4 lg:py-6 px-4 md:px-6 lg:px-8 hover:opacity-80 rounded-r-sm">
              {arrowRight}
            </div>
          </div>
        </Link>
      ) : (
        <button type="button" style={Styles} className="font-medium text-lg w-28 lg:w-48 h-9 lg:h-16 flex items-center justify-between text-gray-900">
          <span className="flex-1">{btnText}</span>
          <span style={Styles2} className="flex h-full px-3 items-center">{arrowRight}</span>
        </button>
      )}
    </>
  );
}

export default Button3;
