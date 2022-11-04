import { storyblokEditable } from "@storyblok/react"
import DynamicComponent from "./DynamicComponent"

const Page = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
      : null}
    </div>
  )
}

export default Page