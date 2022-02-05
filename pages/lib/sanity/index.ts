import { createClient, createImageUrlBuilder, createPreviewSubscriptionHook } from 'next-sanity'

import { config } from './config'

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Set up Preview client
export const previewClient = createClient({
    ...config,
    useCdn: false,
})

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview: boolean) => (usePreview ? previewClient : sanityClient)