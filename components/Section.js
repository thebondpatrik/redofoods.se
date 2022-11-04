import { storyblokEditable } from "@storyblok/react"
import cn from "classnames"
import DynamicComponent from "./DynamicComponent"
import Picture from "./Picture"

import styles from "./Section.module.scss"

const Section = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} style={blok.min_height ?  { 'min-height' : `${blok.min_height}px;` } : null } className={cn(styles.section, blok.classnames, blok.background_color ? styles[blok.background_color] : null, blok.background_image[0] ? styles["has-bg"] : null, blok.style.map((s) => styles[s]).join(" ") )}>
      {Array.isArray(blok.spacing) && blok.spacing.length > 0 ? 
        (
          <div className={cn(blok.spacing.map((s) => styles[s]).join(" "))}>
            {blok.body
              ? blok.body.map((blok) => (
                  <DynamicComponent blok={blok} key={blok._uid} />
                ))
              : null}
          </div>
        ) : (
          <>
            {blok.body
              ? blok.body.map((blok) => (
                  <DynamicComponent blok={blok} key={blok._uid} />
                ))
              : null}
          </>
        )
      }
      {
        blok.background_image[0] ? (
          <Picture blok={blok.background_image[0]} />
        ) : null
      }
      
    </div>
  )
}

export default Section