import '../styles/Cart.css';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

function Cart({ cart, products, editCart, handleCheckout }) {
  const navigate = useNavigate();

  const cartItems = cart.map((entry) => {
    const product = products.find((p) => p.id === entry.id);
    return (
      <CartItem
        key={entry.id}
        entry={entry}
        product={product}
        editCart={editCart}
      />
    );
  });

  const handleContinue = () => {
    navigate('/shop');
  };

  return (
    <div className="Cart">
      {cartItems}
      <CartSummary
        cart={cart}
        products={products}
        handleCheckout={handleCheckout}
        handleContinue={handleContinue}
      />
    </div>
  );
}

export default Cart;
