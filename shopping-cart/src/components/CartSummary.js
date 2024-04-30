import '../styles/CartSummary.css';
import getCartTotal from '../utils/getCartTotal';

function CartSummary({ cart, products, handleCheckout, handleContinue }) {
  return (
    <div className="CartSummary" data-testid="cart-summary">
      <p className="CartSummary-total">
        Your total is: ${getCartTotal(cart, products).toFixed(2)}
      </p>
      <div className="CartSummary-actions">
        <button className="CartSummary-button" onClick={handleCheckout}>
          Checkout
        </button>
        <button className="CartSummary-button" onClick={handleContinue}>
          Continue shopping
        </button>
      </div>
    </div>
  );
}

export default CartSummary;
