const previewSecret = 'MY_PREVIEW_SECRET'

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://your-nextjs-site.com`
const localUrl = `http://localhost:9090`

export default function resolveProductionUrl(doc) {
  const baseUrl = window.location.hostname === 'localhost' ? localUrl : remoteUrl

  const previewUrl = new URL(baseUrl)

  previewUrl.pathname = `/api/preview`
  previewUrl.searchParams.append(`secret`, previewSecret)
  previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`)

  return previewUrl.toString()
}