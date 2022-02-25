import type { GetServerSideProps, NextPage } from 'next'
import { getPageByData, siteConfig } from '../lib/sanity/queries'

import Article from "@web/components/article";
import Carousel from '@web/components/carousel/'
import Contact from "@web/components/contact";
import DefaultLayout from '../layouts/default'
import Gallery1 from '@web/components/gallery/gallery'
import ImageVideoBgComponent from '../components/heros/imageVideoBgComponent'
import Newletter1 from '../components/newletters/newletter1'
import Newsletter2 from '@web/components/newletters/newletter2'
import Newsletter3 from '@web/components/newletters/newletter3'
import Partners from '../components/partners/partners'
import { SiteMetaConfigType } from '../types'
import Statistics from '@web/components/stats'
import TextCardAndOverflow from '@web/components/textcardoverflow'
import Textcardoverflow2 from "@web/components/textcardoverflow/textcardoverflow2";
import Whitespace from '@web/components/whitespace'
import dynamic from 'next/dynamic'
import { getClient } from '../lib/sanity'
import styles from '../styles/Home.module.css'

const TextImageGrid = dynamic(
  () => import('../components/textImageGrid'),
  { ssr: false }
)
const TextCenteredAndBg = dynamic(
  () => import('@web/components/textCenteredandBg/textCenteredandBg1'),
  { ssr: false }
)
const Card = dynamic(
  () => import('../components/card/card'),
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

  console.log('main', content)

  if (content === undefined) {
    //TODO: Create error page component.
    return 'No Content to display for' + pages.title;
  }

  return (
    <DefaultLayout siteConfig={siteMetaData}>
      <main className="h-full">
        {content.map((el: any, i: number) => (
          <div key={i} className="">
            {el._type === "imageAndTextGrid" && <TextImageGrid content={el} />}
            {el._type === "imageVideoBgHeroComponent" && <ImageVideoBgComponent content={el} />}
            {el._type === "partners" && <Partners content={el} />}
            {el._type === "cardsAndCaptions" && <Card content={el} />}
            {el._type === "newsletter" && <Newletter1 content={el} />}
            {el._type === "textCenteredAndImageBg" && <TextCenteredAndBg content={el} />}
            {el._type === "contact" && <Contact content={el} />}
            {el.type === "newsletter2" && <Newsletter2 content={el} />}
            {el.type === "newsletter3" && <Newsletter3 content={el} />}
            {el._type === "article" && <Article content={el} />}
            {el._type === "breakPoint" && <Whitespace content={el} />}
            {el._type === "statistics" && <Statistics content={el} />}
            {el._type === "imageBgandTextCardOverflow" && <TextCardAndOverflow content={el} />}
            {el._type === "carousel" && <Carousel content={el} />}
            {/* {el._type === "carousel" && <Carousel content={el} />} */}
          </div>
        ))}
              <Gallery1 />

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