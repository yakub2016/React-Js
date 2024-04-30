import '../styles/CartItem.css';

function CartItem({ entry: { id, quantity }, product, editCart }) {
  const handleChange = (e) => {
    if (e.target.value < 1) return;
    editCart(id, e.target.value);
  };

  const handleRemove = () => {
    editCart(id, 0);
  };

  const totalItemPrice = product.price * quantity;

  return (
    <article className="CartItem" data-testid="cart-item">
      <div className="CartItem-imageContainer">
        <img
          className="CartItem-image"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="CartItem-right">
        <div className="CartItem-top">
          <p className="CartItem-title">{product.title}</p>
          <p className="CartItem-price">${totalItemPrice.toFixed(2)}</p>
        </div>
        <div className="CartItem-actions">
          <div className="CartItem-quantity">
            <label htmlFor="quantity">Quantity:</label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={handleChange}
              onKeyDown={(e) => e.preventDefault()}
            />
          </div>
          <div className="CartItem-remove">
            <label htmlFor="remove-button">Remove from cart:</label>
            <button id="remove-button" onClick={handleRemove}>
              X
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
