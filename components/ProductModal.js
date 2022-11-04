import cn from "classnames"
import { useEffect, useState } from "react"
import { useProduct } from "../context/product"
import Product from "./Product"
import scrollLock from "../helpers/scroll-lock"


import styles from "./ProductModal.module.scss"

const ProductModal = () => {

  const productCtx = useProduct()
  const [currentProduct, setCurrentProduct] = useState(null)

  useEffect(() => {
    setCurrentProduct(productCtx.currentProduct)
    if (productCtx.currentProduct) {
      scrollLock.enable(document.querySelector("body"))
    }
  }, [productCtx.currentProduct])

  const close = () => {
    productCtx.hideProduct(null)
    scrollLock.disable(document.querySelector("body"))
  }


  return (
    <>
      <div className={cn(currentProduct ? styles.shadow : null)} onClick={close}></div>
      <div className={cn(styles["product-modal"], currentProduct ? styles.show : null)}>
        <div className={cn(styles.holder)}>
          {
            currentProduct ?
              <Product blok={currentProduct.content} />
            : null      
          }
          <button className={styles.close} onClick={close}><img src="/close.svg" alt="" />Close</button>
        </div>
      </div>
    </>
  )


}

export default ProductModal