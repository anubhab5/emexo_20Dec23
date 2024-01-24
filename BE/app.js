const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const jwt = require('jsonwebtoken');
const PORT = 3000;

app.use(cors());
// Middleware to parse JSON requests
app.use(bodyParser.json());

// In-memory array to store products (for simplicity)
let products = [
    {
        productId: 1,
        productName: 'IceCream',
        productPrice: '20',
        productDescription: 'This is a very nice!',
        quantityAvailable: '10',
        isVeg: false,
    },
    {
        productId: 2,
        productName: 'Cake',
        productPrice: '55',
        productDescription: 'The best cake in town',
        quantityAvailable: '2',
        isVeg: false,
    },
    {
        productId: 3,
        productName: 'Milk',
        productPrice: '5',
        productDescription: 'Milk gives us strength',
        quantityAvailable: '12',
        isVeg: true,
    },
    {
        productId: 4,
        productName: 'Chocolate',
        productPrice: '12',
        productDescription: 'The only mood elevator :)',
        quantityAvailable: '10',
        isVeg: true,
    },
    {
        productId: 5,
        productName: 'Corn Flakes',
        productPrice: '22',
        productDescription: 'Breakfast starts with me!!!',
        quantityAvailable: '1',
        isVeg: true,
    },
    {
        productId: 6,
        productName: 'Biscuit',
        productPrice: '2',
        productDescription: 'Any time, every time.',
        quantityAvailable: '1',
        isVeg: false,
    },
    {
        productId: 7,
        productName: 'Cheese',
        productPrice: '21',
        productDescription: 'Any time, every time.',
        quantityAvailable: '11',
        isVeg: true,
    },
];

// In-memory array to store user information (for simplicity)
let users = [
    { id: 1, username: 'admin', password: 'admin123' },
    { id: 2, username: 'user', password: '12345678' },
];

const SECRET_KEY = 'your_secret_key';

// Token validation middleware
const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Token missing' });
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; // Attach decoded user information to the request
        next(); // Proceed to the next middleware or route
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
};

// Read (POST) to authenticate user and generate a token (login)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check if user exists and password is correct (for simplicity)
    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id, username: user.username }, SECRET_KEY);

    res.json({ token });
});

// CRUD operations

// Read (GET) all products
app.get('/products', validateToken, (req, res) => {
    res.json(products);
});

// Read (GET) a specific product by ID
app.get('/products/:id', validateToken, (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find((p) => p.productId === productId);

    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
});

// Create (POST) a new product
app.post('/products', validateToken, (req, res) => {
    const id = products[products.length - 1].productId + 1;
    const newProduct = req.body;
    newProduct.productId = id;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Update (PUT) an existing product by ID
app.put('/products/:id', validateToken, (req, res) => {
    const productId = parseInt(req.params.id);
    const updatedProduct = req.body;

    products = products.map((product) =>
        product.id === productId ? updatedProduct : product
    );

    res.json(updatedProduct);
});

// Delete (DELETE) a product by ID
app.delete('/products/:id', validateToken, (req, res) => {
    const productId = parseInt(req.params.id);

    products = products.filter((product) => product.id !== productId);

    res.json({ message: 'Product deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
