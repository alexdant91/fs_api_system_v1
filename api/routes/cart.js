const express = require('express');
const app = express.Router();

const { Cart } = require('../data');
const { formatCart } = require('../helpers');
const { authUser } = require('../middleware/auth');

/**
 * @path /cart
 */
app.get('/', authUser, (req, res) => {
  const user = req.user;

  const CartMe = Cart(user.id);

  const _cart = CartMe.findMe();

  const cart = formatCart(_cart);

  return res.status(200).json({ cart });
});

/**
 * @path /cart
 */
app.post('/', authUser, (req, res) => {
  const user = req.user;
  const product = req.body;

  const CartMe = Cart(user.id);

  const _cart = CartMe.save(product);

  const cart = formatCart(_cart);

  return res.status(200).json({ cart });
});

/**
 * @path /cart
 */
app.put('/:prodId', authUser, (req, res) => {
  const user = req.user;
  const prodId = req.params.prodId;
  const update = req.body;

  const CartMe = Cart(user.id);

  CartMe.updateById(prodId, update);

  const _cart = CartMe.findMe();

  const cart = formatCart(_cart);

  return res.status(200).json({ cart });
});

/**
 * @path /cart
 */
app.delete('/:prodId', authUser, (req, res) => {
  const user = req.user;
  const prodId = req.params.prodId;

  const CartMe = Cart(user.id);

  CartMe.deleteById(prodId);

  const _cart = CartMe.findMe();

  const cart = formatCart(_cart);

  return res.status(200).json({ cart });
});

module.exports = app;
