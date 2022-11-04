import "../styles/app.scss"

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
  return <Component {...pageProps} />
}

export default MyApp
