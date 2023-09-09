const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
    const body = req.query
    res.status(200).json(body);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});