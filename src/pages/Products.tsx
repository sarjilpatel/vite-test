import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL ?? "https://fakestoreapi.com";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const CATEGORIES = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

const Stars = ({ rate }: { rate: number }) => {
  const full = Math.floor(rate);
  const half = rate - full >= 0.5;
  return (
    <span className="stars">
      {"★".repeat(full)}
      {half ? "½" : ""}
      {"☆".repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
};

const SkeletonCards = () =>
  Array.from({ length: 8 }).map((_, i) => (
    <div className="skeleton-card" key={i}>
      <div className="skeleton skeleton-img" />
      <div className="skeleton-body">
        <div className="skeleton skeleton-line" style={{ width: "60%" }} />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line" style={{ width: "80%" }} />
        <div className="skeleton skeleton-line" style={{ width: "40%", marginTop: "0.5rem" }} />
      </div>
    </div>
  ));

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState<number[]>([]);

  useEffect(() => {
    axios.get<Product[]>(`${apiUrl}/products`).then(({ data }) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const addToCart = (id: number) => setCart((prev) => [...prev, id]);

  return (
    <>
      <div className="page-header">
        <h2>Products</h2>
        <p>
          {loading
            ? "Loading products…"
            : `${filtered.length} items · ${cart.length} in cart`}
        </p>
      </div>

      <div className="category-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`cat-btn${activeCategory === cat ? " active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {loading ? (
          <SkeletonCards />
        ) : (
          filtered.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.title} loading="lazy" />
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <p className="product-title">{product.title}</p>
                <div className="product-rating">
                  <Stars rate={product.rating.rate} />
                  <span>
                    {product.rating.rate} ({product.rating.count})
                  </span>
                </div>
                <div className="product-footer">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  <button className="add-btn" onClick={() => addToCart(product.id)}>
                    {cart.includes(product.id) ? "✓ Added" : "+ Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Products;
