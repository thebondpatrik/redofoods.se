import cn from "classnames"
import { renderRichText, storyblokEditable } from "@storyblok/react"
import styles from "./Content.module.scss"

const Content = ({ blok }) => {
  return (
    <div className={cn("content", blok.background_color ? styles[`${blok.background_color}-bg`] : null )} {...storyblokEditable(blok)} dangerouslySetInnerHTML={{ __html: renderRichText(blok.content) }}></div>
  )
}

export default Content