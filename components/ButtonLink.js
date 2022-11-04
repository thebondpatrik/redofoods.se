import Link from "next/link"
import { useRouter } from "next/router"
import { useProduct } from "../context/product"

import styles from "./ButtonLink.module.scss"


const ButtonLink = ({ blok }) => {
  const router = useRouter()
  const productCtx = useProduct()

  const goToLink = (e) => {
    if (blok.link.cached_url.indexOf("products") > -1) {
      productCtx.showProduct(blok.link.cached_url)
      return
    }
    return router.push(blok.link.cached_url)
    
  }

  return (
    <button className={styles.button} onClick={goToLink}>
      {blok.text}
    </button>
  )
}

export default ButtonLink