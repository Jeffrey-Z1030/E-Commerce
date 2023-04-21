import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Paper } from "@mui/material";

function SinglePage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      <Paper style={{ padding: 20 }}>
        {product ? (
          <div>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ maxWidth: '50%', height: '25em' }} />

            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Paper>
    </div>
  );
}

export default SinglePage;
