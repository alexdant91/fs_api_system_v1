const { Product } = require('../data');

const formatCart = (cart) => {
  const _cart = [...cart];
  _cart.forEach((prod, idx) => {
    const product = Product.findById(prod.productId);
    _cart[idx] = { ...prod, ...product };
  });
  return _cart;
}

module.exports = {
  formatCart,
}
