import { siteConfig, slugQuery } from "../lib/sanity/queries";

import Article1 from "@web/components/article/article1";
import Article2 from "@web/components/article/article2";
import Card1 from "../components/card/card";
import Contact1 from "@web/components/contact/contact1";
import Contact2 from "@web/components/contact/contact2";
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
import Newsletter2 from "@web/components/newletters/newletter2";
import Newsletter3 from "@web/components/newletters/newletter3";

import Stats1 from "../components/stats/stats1";
import Stats2 from "../components/stats/stats2";
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

  const content = data?.pages?.content;
  return (
    <DefaultLayout siteConfig={siteMetaData}>
      <div className="h-screen">
        <main>
          {content &&
            content.map((el: any, i: number) => (
              <div key={i} className="h-full">
                {el._type === "imageVideoBgHeroComponent" ? (
                  <ImageVideoBgComponent content={el} />
                ) : el._type === "imageAndTextGrid" &&
                  el.type === "imgLeftTextRight" ? (
                  <TextImageGrid content={el} />
                ) : el._type === "partners" ? (
                  <Partners content={el} />
                ) : el._type === "cardsAndCaptions" &&
                  el.type === "cardsection1" ? (
                  <Card1 content={el} />
                ) : el._type === "newsletter" && el.type === "newsletter1" ? (
                  <Newletter1 content={el} />
                ) : el._type === "newsletter" && el.type === "newsletter2" ? (
                  <Newsletter2 content={el} />
                ) : el._type === "newsletter" && el.type === "newsletter3" ? (
                  <Newsletter3 content={el} />
                ) : el._type === "textCenteredAndImageBg" ? (
                  <TextCenteredandBg1 content={el} />
                ) : el._type === "contact" && el.type === "contact1" ? (
                  <Contact1 content={el} />
                ) : el._type === "contact" && el.type === "contact2" ? (
                  <Contact2 content={el} />
                ) : el._type === "article" && el.type === "article1" ? (
                  <Article1 content={el} />
                ) : el._type === "article" && el.type === "article2" ? (
                  <Article2 content={el} />
                ) : el._type === "carousel" && el.type === "carousel1" ? (
                  <CarouselComp content={el} />
                ) : null}
              </div>
            ))}
        </main>
      </div>
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
