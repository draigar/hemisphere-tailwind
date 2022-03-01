import { siteConfig, slugQuery } from "../lib/sanity/queries";

import Article from "@web/components/article";
import Carousel from '@web/components/carousel/'
import Contact from "@web/components/contact";
import DefaultLayout from '../layouts/default'
import Error from "@web/components/error/error";
import Head from "next/head";
import ImageVideoBgComponent from '../components/heros/imageVideoBgComponent'
import Newsletter from '../components/newletters'
import Partners from '../components/partners/partners'
import { SiteMetaConfigType } from '../types'
import Statistics from '@web/components/stats'
import TextCardAndOverflow from '@web/components/textcardoverflow'
import Whitespace from '@web/components/whitespace'
import dynamic from 'next/dynamic'
import { getClient } from '../lib/sanity'
import { groq } from "next-sanity";
import { useRouter } from "next/router";

const TextImageGrid = dynamic(
  () => import('../components/textImageGrid'),
  { ssr: false }
)
const TextCenteredAndBg = dynamic(
  () => import('@web/components/textCenteredandBg/textCenteredandBg1'),
  { ssr: true }
)
const Card = dynamic(
  () => import('../components/card/card'),
  { ssr: false }
)


// Start editing here, save and see your changes.
export default function Slug({ data, preview, config }: any) {
  const router = useRouter();
  const siteMetaData: SiteMetaConfigType = {
    title: config?.title,
    slug: config?.slug,
    description: config?.description,
    openGraphImage: config?.openGraphImage,
    footer: {
      _ref: '',
      _type: ''
    }
  };

  if (!router.isFallback && !data?.pages?.slug) {
    //TODO: Create error page component.
    // connect the error page component here and
    // pass the errorPage object as a prop to the error page component
    // then connect the data from within the error page component
    return <Error content={config.errorpage} siteMetaData={siteMetaData} />;
  }


  const content = data?.pages?.content;
  // console.log("main", data);
  return (
    <DefaultLayout siteConfig={siteMetaData}>
      <main className="h-full">
        {content &&
          content.map((el: any, i: number) => (
            <div key={i}>
              {el._type === "imageVideoBgHeroComponent" && <ImageVideoBgComponent content={el} />}
              {el._type === "imageAndTextGrid" && <TextImageGrid content={el} />}
              {el._type === "partners" && <Partners content={el} />}
              {el._type === "cardsAndCaptions" && <Card content={el} />}
              {el._type === "newsletter" && <Newsletter content={el} />}
              {el._type === "textCenteredAndImageBg" && <TextCenteredAndBg content={el} />}
              {el._type === "contact" && <Contact content={el} />}
              {el._type === "article" && <Article content={el} />}
              {el._type === "breakPoint" && <Whitespace content={el} />}
              {el._type === "statistics" && <Statistics content={el} />}
              {el._type === "imageBgandTextCardOverflow" && <TextCardAndOverflow content={el} />}
              {el._type === "carousel" && <Carousel content={el} />}
            </div>
          ))}
      </main>
    </DefaultLayout>
  );
}

export async function getStaticProps({ params, preview = false }: any) {
  const slug = params.slug;
  const sQuery = slugQuery(slug);
  const config = siteConfig();

  const paths = await getClient(false).fetch(config);
  const data = paths;

  const ref = data;

  const pages = await getClient(false).fetch(sQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: { pages },
      config: ref,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getClient(false).fetch(
    groq`*[_type == "page" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}
