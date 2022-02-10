import Footer from "../components/footer";
import Head from "next/head";
import Navbar1 from "../components/navs/nav1";
import React from "react";
import { SiteMetaConfigType } from "../types";

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

interface DefaultLayoutProps {
    // navContent: navTypes;
    children?: any;
    siteConfig: SiteMetaConfigType
}

const DefaultLayout = (props: DefaultLayoutProps) => {
    const { children, siteConfig } = props;
    // const isFetching = useIsFetching()

    React.useEffect(() => {
        new WOW().init()
    }, [])
    return (
      <div>
        <Head>
          <title>
            {siteConfig.title} - {siteConfig.slug}
          </title>
          <meta name="application-name" content={siteConfig.title} />
          <meta name="description" content={siteConfig.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-col justify-between">
          <div>
            <Navbar1 />
            {children}
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    );
}

export default DefaultLayout;