import '../styles/Shop.css';
import bag from '../assets/bag.png';
import { NavLink } from 'react-router-dom';
import ProductCard from './ProductCard';

function Shop({ products, addToCart, showCart }) {
  if (!products) return <div className="Shop--loading">Loading...</div>;

  const productCards = products.map((product) => (
    <ProductCard key={product.id} product={product} addToCart={addToCart} />
  ));

  const cartButton = (
    <NavLink to="/cart">
      <button className="Shop-cartButton">
        <img src={bag} alt="Cart" />
      </button>
    </NavLink>
  );

  return (
    <div className="Shop">
      {productCards}
      {showCart && cartButton}
    </div>
  );
}

export default Shop;
