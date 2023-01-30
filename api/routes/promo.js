const express = require('express');
const { PromoCode } = require('../data');
const app = express.Router();

/**
 * @path /promo-code/:code
 */
app.get('/:code', (req, res) => {
  const code = req.params.code;

  const promo = PromoCode.findByCode(code);

  if (promo) return res.status(200).json({ promo });

  return res.status(404).json({ message: "Promo non valida" });
});

module.exports = app;
