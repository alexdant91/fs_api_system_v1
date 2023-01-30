const express = require('express');
const app = express.Router();

const { Product } = require('../data');

/**
 * @path /products
 */
app.get('/', (_, res) => {
  const products = Product.findAll();

  return res.status(200).json({ products });
});


/**
 * @path /products/:id
 */
app.get('/:id', (_, res) => {
  const product = Product.findById(req.params.id);

  if (product) return res.status(200).json({ ...product });

  return res.status(404).json({ message: "Prodotto non trovato" });
});

module.exports = app;
