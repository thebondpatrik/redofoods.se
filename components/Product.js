import cn from "classnames"
import { storyblokEditable } from "@storyblok/react"
import DynamicComponent from "./DynamicComponent"
import styles from "./Product.module.scss"

const Page = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className={cn("product", styles.product)}>
      {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
      : null}
    </div>
  )
}

export default Page