import express from 'express';
const app = express();
import dotenv from 'dotenv';

// database function import
import {connectDB} from './database/database.js';
// Routes imports
import productRoute from './routes/product.js';

// config
dotenv.config({ path: './config/config.env' });

// connecting to Database
connectDB();

// middlewares
app.use(express.json());
app.use('/api/v1/products', productRoute);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})