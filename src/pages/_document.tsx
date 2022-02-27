import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {

        const originalRenderPage = ctx.renderPage

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name='application-name' content='Hemisphere Technologies' />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='Hemisphere Technologies' />
                    <meta name='description' content='Hemisphere Technologies' />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-config' content='/icons/browserconfig.xml' />
                    <meta name='msapplication-TileColor' content='#2B5797' />
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name='theme-color' content='#004F29' />

                    <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
                    <link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
                    <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />
                    <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />

                    <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
                    <link rel='shortcut icon' href='/favicon.ico' />
                    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional' />

                    <meta name='twitter:card' content='summary' />
                    <meta name='twitter:url' content='https://yourdomain.com' />
                    <meta name='twitter:title' content='Hemisphere Technologies' />
                    <meta name='twitter:description' content='Hemisphere Technologies' />
                    <meta name='twitter:image' content='https://yourdomain.com/icons/android-chrome-192x192.png' />
                    <meta name='twitter:creator' content='@DavidWShadow' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='Hemisphere Technologies' />
                    <meta property='og:description' content='Hemisphere Technologies' />
                    <meta property='og:site_name' content='Hemisphere Technologies' />
                    <meta property='og:url' content='https://yourdomain.com' />
                    <meta property='og:image' content='https://yourdomain.com/icons/apple-touch-icon.png' />
                    <link crossOrigin="anonymous" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument