const ga = {
  GA_TRACKING_ID() {
    return process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
  },
  pageview(url) {
    // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
    window.gtag('config', this.GA_TRACKING_ID, {
      page_path: url,
    })
  },
  event({ action, category, label, value }) {
    // https://developers.google.com/analytics/devguides/collection/gtagjs/events
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export default ga;