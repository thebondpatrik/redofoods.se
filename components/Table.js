import cn from "classnames"
import { storyblokEditable, renderRichText } from "@storyblok/react"
import styles from "./Table.module.scss"

const Table = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className={cn(styles.table, blok.background_color ? styles[`${blok.background_color}-bg`] : null )}>
      {
        blok.columns ?
        blok.columns.map((c, ci) => {
          return (
            <div key={ci} className={styles.column}>
              <strong className={styles.title}>{c.title}</strong>
              {
                c.rows ?
                c.rows.map((r, ri) => {
                  return (
                    <div key={ri} className={styles.row} {...storyblokEditable(r)} dangerouslySetInnerHTML={{ __html: renderRichText(r.text) }}></div>
                  )
                }) : null
              }
            </div>
          )
        }) : null
      }
    </div>
  )
}

export default Table