
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products"
        );

        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Products load cheyyan pattiyilla.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#29251f]">
      {/* Hero Section */}
      <section className="grid items-center gap-8 px-6 py-10 md:grid-cols-2 md:px-12 md:py-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#a87952]">
            New Season Collection
          </p>

          <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
            Find Your
            <br />
            Everyday Style.
          </h1>

          <p className="mt-5 max-w-md leading-7 text-[#756e65]">
            Discover timeless fashion, beautiful essentials, and styles made for
            every moment.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block rounded-full bg-[#29251f] px-8 py-3 text-white transition hover:bg-[#a87952]"
          >
            Explore Collection →
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl bg-[#e9e0d5]">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"
            alt="Fashion collection"
            className="h-[350px] w-full object-cover md:h-[480px]"
          />
        </div>
      </section>

      {/* Collection Intro */}
      <section id="shop" className="px-6 py-12 text-center md:px-12">
        <p className="text-sm uppercase tracking-[0.2em] text-[#a87952]">
          Curated for you
        </p>
        <h2 className="mt-3 text-3xl font-semibold">
          Discover Your Style
        </h2>
        <p className="mt-3 text-[#756e65]">
          Everyday essentials. Effortless elegance.
        </p>
      </section>

      {/* Products */}
      {loading ? (
        <p className="py-10 text-center">Loading products...</p>
      ) : error ? (
        <p className="py-10 text-center text-red-600">{error}</p>
      ) : (
        <ProductCard products={products} />
      )}
    </div>
  );
};

export default Home;
