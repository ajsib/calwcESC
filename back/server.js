const express = require('express')
const path = require('path');
const app = express();
const imageRoutes = require('./routes/imageRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const healthRoute = require('./routes/healthRoute'); 

const basepath = '/calwc-esc-server';

// Middleware to parse JSON requests
app.use(express.json());

// Health Check
app.use(`${basepath}/api/`, healthRoute)

// routes
app.use('/api/images/', imageRoutes);


// Error handling middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 6739;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
