import "../styles/app.scss"
import Script from "next/script"
import { RichTextSchema, storyblokInit, apiPlugin } from "@storyblok/react"
import cloneDeep from "clone-deep"
import ReactDOMServer from "react-dom/server"
import DynamicComponent from "../components/DynamicComponent"
import Page from "../components/Page"
import IconLink from "../components/IconLink"
import Product from "../components/Product"
import ButtonLinks from "../components/ButtonLinks"

const components = {
  DynamicComponent,
  page: Page,
  icon_link: IconLink,
  product: Product,
  button_links: ButtonLinks,
}

const mySchema = cloneDeep(RichTextSchema)

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
  richText: {
    schema: mySchema,
    resolver: (component, blok) => {
      switch (component) {
        case "icon_link":
          return ReactDOMServer.renderToString(<IconLink blok={blok} />)
        case "button_links":
          return ReactDOMServer.renderToString(<ButtonLinks blok={blok} />)
        default:
          return `Component ${component} not found`
      }
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.ANALYTICS_ID}');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
