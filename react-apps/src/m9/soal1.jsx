import React, { useState } from "react";

const products = [
  { id: 1, name: "Produk A", price: 20000, image: "300 x 200" },
  { id: 2, name: "Produk B", price: 30000, image: "300 x 200" },
  { id: 3, name: "Produk C", price: 50000, image: "300 x 200" },
];

const App = () => {
  const Card = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
      if (quantity > 0) setQuantity(quantity - 1);
    };

    return (
      <div className="card">
        <div className="image">{product.image}</div>
        <h2 className="name">{product.name}</h2>
        <p className="price">Harga: Rp {product.price.toLocaleString()}</p>
        <div className="actions">
          <button onClick={decreaseQuantity} className="btn btn-decrease">
            Kurang
          </button>
          <span className="quantity">{quantity}</span>
          <button onClick={increaseQuantity} className="btn btn-increase">
            Tambah
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .container {
          display: flex;
          gap: 20px;
        }

        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 16px;
          width: 200px;
          background-color: #fff;
        }

        .image {
          background-color: #e0e0e0;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          color: #888;
          border-radius: 4px;
        }

        .name {
          font-size: 18px;
          font-weight: bold;
          margin-top: 16px;
        }

        .price {
          color: #555;
          margin: 8px 0;
        }

        .actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 16px;
        }

        .btn {
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .btn-decrease {
          background-color: #ff5252;
          color: #fff;
        }

        .btn-increase {
          background-color: #4caf50;
          color: #fff;
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .quantity {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
      <div className="container">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
