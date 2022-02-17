import { siteConfig, slugQuery } from "../lib/sanity/queries";

import Article from "@web/components/article";
import Article2 from "@web/components/article/article2";
import Card1 from "../components/card/card";
import Contact from "@web/components/contact";
import DefaultLayout from "../layouts/default";
import Head from "next/head";
import ImageVideoBgComponent from "../components/heros/imageVideoBgComponent";
import Newletter1 from "../components/newletters/newletter1";
import Partners from "../components/partners/partners";
import { SiteMetaConfigType } from "../types";
import TextCenteredandBg1 from "@web/components/textCenteredandBg/textCenteredandBg1";
import TextImageGrid from "../components/textImageGrid/textImageGrid";
import { getClient } from "../lib/sanity";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import CarouselComp from "@web/components/carousel";

import Stats1 from "../components/stats/stats1";
import Stats2 from "../components/stats/stats2";
import dynamic from "next/dynamic";
// Start editing here, save and see your changes.
export default function Slug({ data, preview, config }: any) {
  const router = useRouter();
  if (!router.isFallback && !data?.pages?.slug) {
    //TODO: Create error page component.
    // connect the error page component here and
    // pass the errorPage object as a prop to the error page component
    // then connect the data from within the error page component
    console.log("from here", config.errorPage);
    return "Error page";
  }

  const siteMetaData: SiteMetaConfigType = {
    title: config?.title,
    slug: config?.slug,
    description: config?.description,
    openGraphImage: config?.openGraphImage,
  };

  const Card = dynamic(
    () => import('../components/card/card'),
    { ssr: false }
  )

  const content = data?.pages?.content;
  console.log(content)
  return (
    <DefaultLayout siteConfig={siteMetaData}>
      <main className="h-full">
          {content && content.map((el: any, i: number) => (
            <div key={i}>
              {el._type === "cardsAndCaptions" && <Card content={el} />}
              {el._type === "contact" && <Contact content={el} />}
              {el._type === "article" && <Article content={el} />}
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

  console.log(ref);

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
