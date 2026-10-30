import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({products,onAddToCart}) => {
  return (
    
<section className="grid grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 md:grid-cols-3 md:px-12">
  {products.map((product) => (
    <article key={product.id} className="group">
      <div className="overflow-hidden rounded-xl bg-[#eee7df]">
       <Link to={`/product/${product.id}`}> <img
          src={product.image}
          alt={product.name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
        /></Link>
      </div>

      <p className="mt-4 text-sm text-[#a87952]">
        {product.category}
      </p>

      <h3 className="mt-1 text-lg font-medium">
        {product.name}
      </h3>

      <p className="mt-2 font-semibold">
        AED {product.price}
      </p>

      
<button
  type="button"
  onClick={() => onAddToCart(product)}
  className="mt-4 w-full rounded-full border border-[#29251f] py-3 transition hover:bg-[#29251f] hover:text-white"
>
  Add to Cart
</button>

    </article>
  ))}
</section>

  )
}

export default ProductCard