import express from 'express';
const app = express();
import dotenv from 'dotenv';

// Routes imports
import productRoute from './routes/product.js';

// config
dotenv.config({ path: './config/config.env' });

// middlewares
app.use(express.json());
app.use('/api/v1/product', productRoute);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})