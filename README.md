# API SYSTEM

Basic API system.

## INSTALL

To install, navigate to the `./api` folder and run `npm install` or `yarn install`.

## RUN API AND REACT SERVERS

Open a terminal window on `./api` directory and run `npm start` or `yarn start` to start api server.

## API

How to make request to you localhost api system.

Post request to make user login, check `/api/data/db.json` to get correct user `email` and `password`:

```js
/*
* –> User login
* @url http://localhost:3000/users/login
* @method POST
**/
(async () => {
  try {
    const results = await axios({
      url: "http://localhost:3000/users/login",
      method: "POST",
      data: {
        email: "mario.bianchi@example.com",
        password: "1234"
      }
    });
  
    const data = results.data; // -> { user: { ... }, token: ... }
  } catch(err) {
    console.error(err);
  }
})()
```

Get request to fetch current user cart items. Remember to set correct header `Authorization` with the token value retrieved from
the login request (look up):

```js
/*
* –> Get cart for a specific user
* @url http://localhost:3000/cart
* @method GET
* @headers Authorization: {USER_AUTH_TOKEN}
**/
(async () => {
  try {
    const results = await axios({
      url: "http://localhost:3000/cart",
      method: "GET",
      headers: {
        "Authorization": `${USER_AUTH_TOKEN}`,
      }
    });

    const data = results.data;
  } catch(err) {
    console.error(err);
  }
})()
```

Post request to add a new product in cart. Remember to set correct header `Authorization` with the token value retrieved from
the login request (look up):

```js
/*
* –> Fill cart for a specific user
* @url http://localhost:3000/cart
* @method POST
* @headers Authorization: {USER_AUTH_TOKEN}
**/
(async () => {
  try {
    const results = await axios({
      url: "http://localhost:3000/cart",
      method: "POST",
      data: {
        productId: 0,
        qnt: 2
      },
      headers: {
        "Authorization": `${USER_AUTH_TOKEN}`,
      }
    });

    const data = results.data;
  } catch(err) {
    console.error(err);
  }
})()
```

Put request to update cart product quantity. Remember to set correct header `Authorization` with the token value retrieved from
the login request (look up):

```js
/*
* –> Update cart for a specific user
* @url http://localhost:3000/cart/{idProduct}
* @method PUT
* @headers Authorization: {USER_AUTH_TOKEN}
**/
(async () => {
  try {
    const results = await axios({
      url: `http://localhost:3000/cart/${productId}`,
      method: "PUT",
      data: {
        qnt: 2
      },
      headers: {
        "Authorization": `${USER_AUTH_TOKEN}`,
      }
    });

    const data = results.data;
  } catch(err) {
    console.error(err);
  }
})()
```

Delete request to remove a product from cart. Remember to set correct header `Authorization` with the token value retrieved from
the login request (look up):

```js
/*
* –> Delete a cart product for a specific user
* @url http://localhost:3000/cart/{idProduct}
* @method DELETE
* @headers Authorization: {USER_AUTH_TOKEN}
**/
(async () => {
  try {
    const results = await axios({
      url: `http://localhost:3000/cart/${productId}`,
      method: "DELETE",
      headers: {
        "Authorization": `${USER_AUTH_TOKEN}`,
      }
    });

    const data = results.data;
  } catch(err) {
    console.error(err);
  }
})()
```

Get request to fetch all products:

```js
/*
* –> Get all products
* @url http://localhost:3000/products
* @method GET
**/
(async () => {
  try {
    const results = await axios({
      url: "http://localhost:3000/products",
      method: "GET"
    });

    const data = results.data;
  } catch(err) {
    console.error(err);
  }
})()
```

Get request to validate promo codes:

```js
/*
* –> Validate promo code
* @url http://localhost:3000/promo-code/{code}
* @method GET
**/
(async () => {
  try {
    const results = await axios({
      url: `http://localhost:3000/promo-code/${code}`,
      method: "GET"
    });

    const data = results.data;
  } catch(err) {
    console.error(err);
  }
})()
```
