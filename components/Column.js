import { storyblokEditable } from "@storyblok/react"
import DynamicComponent from "./DynamicComponent"

const Column = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <DynamicComponent blok={blok} />
    </div>
  )
}

export default Column