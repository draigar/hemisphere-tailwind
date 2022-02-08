import config from '../lib/sanity/config'
import { getFileAsset } from '@sanity/asset-utils'

const videoAssetFor = (source: string) => {
  return getFileAsset(source, config)
}

export default videoAssetFor