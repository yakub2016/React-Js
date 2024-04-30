import '../styles/ProductCard.css';
import { useState } from 'react';

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (quantity === 9) return;
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity === 1) return;
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handleAddToCart = () => {
    addToCart(id, quantity);
    setQuantity(1);
    alert('Product added to cart');
  };

  const { id, title, description, image, price, rating } = product;

  return (
    <article className="ProductCard" data-testid="product-card">
      <p className="ProductCard-title">{title}</p>
      <div className="ProductCard-imageContainer">
        <img className="ProductCard-image" src={image} alt={title} />
        <p className="ProductCard-rating">★{rating?.rate || '―'}</p>
      </div>
      <p className="ProductCard-description">{description}</p>
      <p className="ProductCard-price">
        ${(price * quantity).toFixed(2)}
        {quantity > 1 && (
          <span className="ProductCard-priceDetails">
            (${price.toFixed(2)} × {quantity})
          </span>
        )}
      </p>
      <div className="ProductCard-buttons">
        <button className="ProductCard-button" onClick={incrementQuantity}>
          +
        </button>
        <button className="ProductCard-button" onClick={decrementQuantity}>
          -
        </button>
        <button className="ProductCard-button wide" onClick={handleAddToCart}>
          Add to cart {quantity > 1 && `(${quantity})`}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
