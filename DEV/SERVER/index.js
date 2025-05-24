import express from 'express';
import routes from './routes/routesHome.js';
const app = express();
const PORT = 4100;

// Middleware to parse JSON
app.use(express.json());

app.use('/', routes);
// Middleware to serve static files from the 'public' directory )

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});