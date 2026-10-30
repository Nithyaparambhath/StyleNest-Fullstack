
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">
          Product not found
        </h2>
        <Link to="/" className="mt-4 inline-block underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2">

      {/* Product Image */}
      <div className="overflow-hidden rounded-xl bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full max-h-[600px] w-full object-cover"
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-col items-start justify-center">
        <p className="mb-3 text-sm text-gray-500">
          {product.category}
        </p>

        <h1 className="mb-4 text-3xl font-bold">
          {product.name}
        </h1>

        <p className="mb-4 text-2xl font-semibold">
          AED {product.price}
        </p>

        <p className="mb-6 leading-7 text-gray-600">
          {product.description}
        </p>

        {/* Size Selection */}
        <label className="mb-2 font-medium">
          Select Size
        </label>

        <div className="mb-6 flex gap-3">
          {["S", "M", "L", "XL"].map((item) => (
            <button
              key={item}
              onClick={() => setSize(item)}
              className={`rounded-md border px-5 py-2 ${
                size === item
                  ? "border-black bg-black text-white"
                  : "border-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Quantity */}
        <p className="mb-3 font-medium">Quantity</p>

        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={() =>
              setQuantity((previous) =>
                Math.max(1, previous - 1)
              )
            }
            className="rounded border px-4 py-2"
          >
            -
          </button>

          <span>{quantity}</span>

          <button
            onClick={() =>
              setQuantity((previous) => previous + 1)
            }
            className="rounded border px-4 py-2"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product, quantity, size)}
          className="w-full rounded-md bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
        >
          Add to Cart
        </button>

        <Link to="/" className="mt-5 text-sm underline">
          ← Continue Shopping
        </Link>
      </div>
    </section>
  );
}

export default ProductDetails;
