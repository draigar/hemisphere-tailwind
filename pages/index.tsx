import type { GetServerSideProps, NextPage } from 'next'
import { getPageByData, siteConfig } from './lib/sanity/queries'

import DefaultLayout from './layouts/default'
import Head from 'next/head'
import ImageVideoBgComponent from './components/heros/imageVideoBgComponent'
import { getClient } from './lib/sanity'
import styles from '../styles/Home.module.css'
import TextImageGrid from './components/textImageGrid/textImageGrid'
import Partners from './components/partners/partners'

export default function Home(data: any) {
  const { config, pages } = data.data;
  const content = pages?.content;

  if (content === undefined) {
    //TODO: Create error page component.
    return 'No Content to display for' + pages.title;
  }

  return (
    <DefaultLayout>
      <div className="h-screen">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="h-full">
          {/* {content.map((el: any, i: number) => (
            <div key={i} className="h-full">
              {el._type === 'imageVideoBgHeroComponent' && <ImageVideoBgComponent content={el} />}
            </div>
          ))} */}
          <TextImageGrid />
          <Partners />
        </main>

      </div>
    </DefaultLayout>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const config = siteConfig();
  const paths = await getClient(false).fetch(config);
  const data = paths;
  const ref = data.frontpage._ref;
  const pageData = getPageByData('_id', ref, 0);
  const pages = await getClient(false).fetch(pageData);
  const payload = {
    config: data,
    pages
  };
  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      data: payload
    } // will be passed to the page component as props
  };
};