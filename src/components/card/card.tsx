import CustomText from "../text/customText";
import Image from "next/image";
import React from "react";
import urlFor from "../../helpers/imageUrlGenerator";

function Card1({ content }: any) {
  console.log("====================================");
  console.log(content);
  console.log("====================================");

  const heading = content?.heading?.text;
  const caption = content?.captionText?.text;
  const cards = content?.cards;

  const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <CustomText content={heading} textAlign="center" />
          <CustomText content={caption} textAlign="center" />

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {cards.map((val: any, i: number) => (
              <div key={i} className="group relative shadow-lg">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={urlFor(val.Image.asset._ref).url()}
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="py-4 px-6 pb-8">
                  <CustomText content={val?.heading?.text} textAlign="center" />
                  <div className="my-4"></div>
                  <CustomText
                    content={val?.subheading?.text}
                    textAlign="center"
                  />
                  <CustomText content={val?.bodyText?.text} textAlign="center" classNames="text-base font-normal" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
