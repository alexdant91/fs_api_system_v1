const { v4: uuid } = require('uuid');
const fs = require('fs');
const path = require('path');

const db = JSON.parse(fs.readFileSync(path.join(__dirname, './db.json')));

const users = db.users;
const carts = db.carts;
const products = db.products;
const promoCodes = db["promo-codes"];

const Config = {
  SECRET_KEY: "ff2ad04841230757465d435cad37a2c0418db6ff",
}

const PromoCode = {
  promoCodes,
  findByCode(code) {
    return this.promoCodes.find(p => p.code == code);
  },
}

const User = {
  users,
  login(email, password) {
    return this.users.find(u => u.email == email && u.password == password);
  },
  getMe(userId) {
    return this.users.find(u.id == userId)
  },
}

const Cart = (userId) => ({
  UID: userId,
  carts,
  findMe() {
    return this.carts[this.UID]
  },
  updateById(productId, update) {
    const prodIdx = this.carts[this.UID].findIndex(prod => prod.productId == productId);
    if (prodIdx != -1) {
      this.carts[this.UID][prodIdx] = { ...this.carts[this.UID][prodIdx], ...update };

      fs.writeFileSync(path.join(__dirname, './db.json'), JSON.stringify({ users, products, carts: this.carts, "promo-codes": promoCodes }, null, 2));

      return this.carts[this.UID];
    }
    return false;
  },
  deleteById(productId) {
    const prodIdx = this.carts[this.UID].findIndex(prod => prod.productId == productId);
    if (prodIdx != -1) {
      this.carts[this.UID].splice(prodIdx, 1);

      fs.writeFileSync(path.join(__dirname, './db.json'), JSON.stringify({ users, products, carts: this.carts, "promo-codes": promoCodes }, null, 2));

      return this.carts[this.UID];
    }
  },
  save(cart) {
    if (userId && cart) {
      const cartProdIndex = this.carts[userId].findIndex(c => c.productId == cart.productId);

      if (cartProdIndex != -1) {
        this.carts[userId][cartProdIndex] = { ...this.carts[userId][cartProdIndex], ...cart };
      } else {
        this.carts[userId].push({ id: uuid(), ...cart });
      }

      fs.writeFileSync(path.join(__dirname, './db.json'), JSON.stringify({ users, products, carts: this.carts, "promo-codes": promoCodes }, null, 2));

      return this.carts[userId];
    }
  }
});

const Product = {
  products,
  findById(id) {
    return this.products.find(p => p.id == id);
  },
  findAll() {
    return this.products;
  }
}

module.exports = {
  Cart,
  Config,
  Product,
  PromoCode,
  User,
}
