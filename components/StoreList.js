import { storyblokEditable } from "@storyblok/react"
import cn from "classnames"

import styles from "./StoreList.module.scss"

const StoreList = ({ blok }) => {
  const getStoreStyle = (store) => {
    return {
      maxHeight: store.max_height ? store.max_height : "auto",
      maxWidth: store.max_width ? store.max_width : "auto"
    }
  }
  return (
    <div className={cn(styles["store-listing"])} {...storyblokEditable(blok)}>
      {
        blok.stores ?
          blok.stores.map((store, index) => {
            return (
              <div className={cn(styles.store)} {...storyblokEditable(store)} key={index}>
                <img style={getStoreStyle(store)} src={store.image.filename}  alt={store.alt} />
              </div>
            )
          }) : null
      }
    </div>
  )
}

export default StoreList