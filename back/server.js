const express = require('express');
const path = require('path');
const app = express();
const imageRoutes = require('./routes/imageRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

// Middleware to parse JSON requests
app.use(express.json());

// Image routes
app.use('/api/images/', imageRoutes);

// Error handling middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
