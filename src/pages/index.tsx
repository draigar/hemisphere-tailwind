import type { GetServerSideProps, NextPage } from 'next'
import { getPageByData, siteConfig } from '../lib/sanity/queries'

import Card1 from '../components/card/card'
import CarouselComp from '../components/carousel'
import DefaultLayout from '../layouts/default'
import ImageVideoBgComponent from '../components/heros/imageVideoBgComponent'
import Newletter1 from '../components/newletters/newletter1'
import Partners from '../components/partners/partners'
import { SiteMetaConfigType } from '../types'
import dynamic from 'next/dynamic'
import { getClient } from '../lib/sanity'
import styles from '../styles/Home.module.css'

const TextImageGrid = dynamic(
  () => import('../components/textImageGrid/textImageGrid'),
  { ssr: false }
)
const TextCenteredAndBg = dynamic(
  () => import('@web/components/textCenteredandBg/textCenteredandBg1'),
  { ssr: false }
)

export default function Home(data: any) {
  const { config, pages } = data.data;
  const content = pages?.content;

  const siteMetaData: SiteMetaConfigType = {
    title: config?.title,
    slug: config?.slug,
    description: config?.description,
    openGraphImage: config?.openGraphImage,
  }

  if (content === undefined) {
    //TODO: Create error page component.
    return 'No Content to display for' + pages.title;
  }

  return (
    <DefaultLayout siteConfig={siteMetaData}>
      <main className="h-full">
        <CarouselComp />
        {content.map((el: any, i: number) => (
          <div key={i} className="">
            {el._type === "imageAndTextGrid" && <TextImageGrid content={el} />}
            {el._type === "imageVideoBgHeroComponent" && <ImageVideoBgComponent content={el} />}
            {el._type === "partners" && <Partners content={el} />}
            {el._type === "cardsAndCaptions" && <Card1 content={el} />}
            {el._type === "newsletter" && <Newletter1 content={el} />}
            {el._type === "textCenteredAndImageBg" && <TextCenteredAndBg content={el} />}
          </div>
        ))}
      </main>
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