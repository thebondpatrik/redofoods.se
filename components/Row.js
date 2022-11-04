import { storyblokEditable } from "@storyblok/react"
import cn from "classnames"

import Column from "./Column"

const Row = ({ blok }) => {

  const getStyles = (blok) => {
    return cn(blok.style.join(" "), blok.visibility.join(" "))
  }
  return (
    <div {...storyblokEditable(blok)} className={getStyles(blok)}>
      {blok.columns
      ? blok.columns.map((blok) => (
        <div key={blok._uid} className={getStyles(blok)}>
          {blok.body && blok.body.map(body => {
            return (
              <Column blok={body} animation={blok.animation} scrub={blok.scrub} key={body._uid} />
            )
          })}
        </div>
        ))
      : null}
    </div>
  )
}

export default Row