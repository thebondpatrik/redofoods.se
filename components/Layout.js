import Head from "../components/Head"
import { useEffect } from "react"
import { useProduct } from "../context/product"
import ProductModal from "./ProductModal"

const Layout = ({ children, products, title, description }) => {
  const productCtx = useProduct()

  useEffect(() => {
    productCtx.addProducts(products)
  }, [])

  return (
    <>
      <Head title={title} description={description} />
      <ProductModal />
      {children}
    </>
  )
}

export default Layout