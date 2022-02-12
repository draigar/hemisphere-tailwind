import background from './objects/background'
import bodeText from './objects/bodyText'
import button from './objects/button';
import card from './objects/card';
import cardsAndCaption from './components/cardsAndCaption';
import carousel from './components/carousel';
import carouselElements from './objects/carouselElements';
import color from './objects/color';
import contactUs from './components/contactUs';
import createSchema from 'part:@sanity/base/schema-creator';
import emailFormSec from './components/emailFormSec';
import embedHTML from './objects/embedHTML';
import error from './documents/error';
import font from './objects/font';
import footer from './template/footer';
import forms from './objects/formField';
import gallery from './components/gallery';
import imageAndTextGrid from './components/imageAndTextGrid';
import imageBgandTextCardOverflow from './components/imageBgandTextCardOverflow';
import imageObject from './objects/imageObject';
import imageVideoBgHero from './components/imageVideoBgHero';
import link from './objects/link';
import nav from './documents/nav';
import navItem from './objects/navItem';
import newsLetter from './components/newsLetter';
import page from './documents/page';
import partners from './components/partners';
import portableText from './objects/portableText';
import reviewer from './objects/reviewer';
import reviews from './components/reviews';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import section from './template/section';
import simplePortableText from './objects/simplePortableText';
import siteConfig from './documents/siteConfig';
import stat from './objects/stat';
import statistics from './components/stats';
import team from './components/team';
import teamMember from './objects/teamMember';
import text from './objects/text';
import textcenteredandimagebg from './components/imageCenteredAndText';
import article from './components/article';
import video from './objects/video';
import propertySize from './objects/propertySize';
import margin from './objects/margin'
import videoAndTextCaption from './components/videoAndTextCaption';
import input from './objects/input';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    section,
    page,
    siteConfig,
    text,
    simplePortableText,
    button,
    forms,
    color,
    imageObject,
    reviewer,
    stat,
    error,
    teamMember,
    card,
    font,
    navItem,
    nav,
    link,
    carousel,
    carouselElements,
    bodeText,
    portableText,
    gallery,
    emailFormSec,
    embedHTML,
    video,
    background,
    cardsAndCaption,
    contactUs,
    imageAndTextGrid,
    imageBgandTextCardOverflow,
    textcenteredandimagebg,
    imageVideoBgHero,
    newsLetter,
    partners,
    reviews,
    statistics,
    team,
    videoAndTextCaption,
    propertySize,
    margin,
    input,
    article,
    footer

  ]),
});
