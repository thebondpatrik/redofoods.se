import cn from "classnames"

import styles from "./Labels.module.scss"

const Labels = ({ blok }) => {
  return (
    <div className={cn(styles.labels)}>
      {
        blok.labels ?
          blok.labels.map((l, index) => {
            return (
              <div key={index} className={styles.label}>
                <strong>{l.title}</strong>
              </div>
            )
          }) : null
      }
    </div>
  )
}

export default Labels