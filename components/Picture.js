import { storyblokEditable } from "@storyblok/react"
import cn from "classnames"
import styles from "./Picture.module.scss"

const Picture = ({ blok }) => {
  const getMediaQuery = (media) => {
    switch (media) {
      case "xs":
        return "(min-width: 300px) and (max-width: 425px)"
      case "sm":
        return "(min-width: 426px) and (max-width: 768px)"
      case "md":
        return "(min-width: 769px) and (max-width: 1024px)"
      case "lg":
        return "(min-width: 1025px) and (max-width: 1440px)"
      case "xl":
        return "(min-width: 1441px)"
    }
  }

  return (
    <div className={ cn(styles.picture, blok.style ? blok.style.map(m => styles[m]) : null) }>
      <picture {...storyblokEditable(blok)}>
        {blok.sources ? 
          blok.sources.map((source, index) => (
            <source srcSet={`${source.file.filename}/m/filters:format(webp)`} type="image/webp" key={`webp-${index}`} media={getMediaQuery(source.media)} />
          ))
          : null
        }
        {blok.sources ? 
          blok.sources.map((source, index) => (
            <source srcSet={source.file.filename} key={`jpeg${index}`} type="image/jpeg" media={getMediaQuery(source.media)} />
          ))
          : null
        }
        {
          blok.default ? (<img src={blok.default.filename} alt={blok.default.alt ?? "" } />) : null
        }
        
      </picture>
    </div>
  )
}

export default Picture