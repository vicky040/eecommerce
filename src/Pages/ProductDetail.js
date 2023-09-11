import React,{useState , useEffect} from 'react';
import './ProductDetail.css';
import { useLocation, useParams } from "react-router-dom";

const generateStars = (rating) => {
  const MAX_RATING = 5;
  const filledStars = Math.floor(rating);
  const remainingStars = MAX_RATING - filledStars;

  const starIcons = [];

  for (let i = 0; i < filledStars; i++) {
    starIcons.push(<span key={i} className="star-icon">&#9733;</span>);
  }

  for (let i = 0; i < remainingStars; i++) {
    starIcons.push(<span key={filledStars + i} className="star-icon">&#9734;</span>);
  }

  return starIcons;
};

const ProductDetail = () => {
  const { productId } = useParams();
  const location = useLocation();
  const productData = location.state && location.state.data;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productData) {
     const foundProduct = productData.filter((item) => item.id == productId);
     if (foundProduct) {
        setProduct(foundProduct[0]);
      } else {
       setProduct(null);
      }
    }
  }, [productId, productData]);
  
  
  if (!product) {
    return <div>Product not found</div>;
  }
   
  return (
    <div className="product-detail-container">
      <div className="image-container">
        <img src={product.image} alt="Product" />
      </div>
      <div className="details-container">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <div className="rating">Rating: {generateStars(product.rating.rate)}</div>
      </div>
    </div>
  );
};

export default ProductDetail;

