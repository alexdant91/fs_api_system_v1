const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/cart', require('./routes/cart'));
app.use('/products', require('./routes/products'));
app.use('/promo-code', require('./routes/promo'));
app.use('/users', require('./routes/users'));

app.listen(3000, () => {
  console.log("Server up and running on http://localhost:3000...");
})
