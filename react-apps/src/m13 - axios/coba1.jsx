import axios from "axios";
import { useEffect, useState } from "react";

function CobaAxios() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Pastikan dependensinya hanya array kosong []

  return (
    <div>
      <ul>
        {posts.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CobaAxios;
    