import { createContext, useContext, useState } from "react"

const ProductContext = createContext({})

const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState(null)
  const [currentProduct, setCurrentProduct] = useState(false)

  const showProduct = (full_slug) => {
    // get product
    const product = products.find(p => p.full_slug == full_slug)
    // set product
    if (product) {
      setCurrentProduct(product)
    } else {
      setCurrentProduct(null)
    }
  }

  const hideProduct = () => {
    setCurrentProduct(null)
  }

  const addProducts = (products) => {
    setProducts(products)
  }

  const value = {
    products,
    currentProduct,
    showProduct,
    hideProduct,
    addProducts,
  }
  
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

const useProduct = () => {
  return useContext(ProductContext)
}


export {
  ProductProvider,
  useProduct,
}