function getCartTotal(cart, products) {
  let cartTotal = 0;

  for (const entry of cart) {
    const product = products.find((p) => p.id === entry.id);
    const entryTotal = entry.quantity * product.price;
    cartTotal += entryTotal;
  }

  return cartTotal;
}

export default getCartTotal;
