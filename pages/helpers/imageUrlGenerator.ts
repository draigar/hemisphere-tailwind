// IMPORTS FOR IMAGE HANDLING
import { config } from '../lib/sanity/config'
import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder(config);

// GENERATE IMAGE URL
export function urlFor(source) {
	return builder.image(source);
}
