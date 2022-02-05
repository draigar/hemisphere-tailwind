import { config } from '../lib/sanity/config'
import { getFileAsset } from '@sanity/asset-utils'

export function videoAssetFor (source) {
    return getFileAsset(source, config)
  }