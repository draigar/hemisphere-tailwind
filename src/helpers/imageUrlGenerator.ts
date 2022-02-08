// IMPORTS FOR IMAGE HANDLING
import config from '../lib/sanity/config'
import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder(config);

// GENERATE IMAGE URL
const urlFor = (source: any) => {
	return builder.image(source);
}

export default urlFor