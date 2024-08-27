import express from 'express';
import "dotenv/config";
import cors from 'cors';
import customerRoutes from './routes/customerRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import connectDB from './config/db.js';

const app = express();
const port = process.env.PORT || 5500;

connectDB();

// Middleware
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/customers', customerRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
