import React from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'


const Shop = () => {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#29251f]">
       <section id="shop" className="px-6 py-12 text-center md:px-12">
              <ProductCard products={products} onAddToCart={() => setCartCount((prev) => prev + 1)} />

      </section>
    </div>
  )
}

export default Shop