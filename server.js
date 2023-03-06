const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
];

// Add a product
app.post('/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.send('Product added');
});

// Display all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Remove a product
app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    products = products.filter((product) => product.id != id);
    res.send('Product removed');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});