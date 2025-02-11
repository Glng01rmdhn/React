import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function AxiosStore() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const updateCart = (title, price, change) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[title]?.quantity || 0;
      const newQuantity = currentQuantity + change;

      if (newQuantity <= 0) {
        const { [title]: _, ...rest } = prevCart;
        return rest;
      }

      return {
        ...prevCart,
        [title]: { price, quantity: newQuantity },
      };
    });
  };

  return (
    <div className="container">
      <h1 className="title">Shopping Store</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ShoppingCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            src={product.image}
            description={product.description}
            quantity={cart[product.title]?.quantity || 0}
            onUpdate={updateCart}
          />
        ))}
      </div>
    </div>
  );
}

function ShoppingCard({ id, title, price, src, quantity, onUpdate }) {
  return (
    <div className="card">
      <Link to={`/${id}`} className="card-link">
        <img src={src} alt={title} className="card-img" />  
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">Harga: Rp.{price}</p>
          <p className="card-text">Quantity: {quantity}</p>
          <p className="card-text">Total: Rp.{quantity * price}</p>
        </div>
      </Link>
      <div className="card-actions">
        <button className="btn btn-add" onClick={() => onUpdate(title, price, 1)}>Tambah</button>
        <button className="btn btn-remove" onClick={() => onUpdate(title, price, -1)}>Kurang</button>
      </div>
    </div>
  );
}

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.error("Error fetching product detail:", error));
  }, [id]);

  if (!product) {
    return <p className="loading-text">Loading product details...</p>;
  }

  return (
    <div className="detail-container">
      <div className="detail-card">
        <div className="detail-image-container">
          <img src={product.image} alt={product.title} className="detail-img" />
        </div>
        <div className="detail-info">
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-price">Rp. {product.price}</p>
          <p className="detail-description">{product.description}</p>
          <p className="detail-category">Category: {product.category}</p>
          <p className="detail-rating">Rating: 4.5/5 (146 reviews)</p>
          
          <div className="size-selector">
            <p>Select Size:</p>
            <div className="size-options">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button key={size} className="size-btn">{size}</button>
              ))}
            </div>
          </div>
          
          <div className="detail-actions">
            <button onClick={() => navigate("/")} className="btn btn-back">Back to Home</button>
            <button className="btn btn-buy">Add to Bag</button>
          </div>
          <p className="shipping-info">Free shipping on all continental US orders.</p>
        </div>
      </div>
    </div>
  );
}
