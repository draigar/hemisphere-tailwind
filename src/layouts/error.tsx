import Head from "next/head";
import React from "react";
import { SiteMetaConfigType } from "../types";

interface ErrorLayoutProps {
    // navContent: navTypes;
    children?: any;
    siteConfig: SiteMetaConfigType
}

const ErrorLayout = (props: ErrorLayoutProps) => {
    const { children, siteConfig } = props;
    // const isFetching = useIsFetching()
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
            {children}
          </div>
        </div>
      </div>
    );
}

export default ErrorLayout;