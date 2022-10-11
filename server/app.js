import express from 'express';
api / v1const app = express();
import dotenv from 'dotenv';

// database function import
import { connectDB } from './database/database.js';
// Routes imports
import productRoute from './routes/product.js';
import userRoute from './routes/user.js';

// config
dotenv.config({ path: './config/config.env' });

// connecting to Database
connectDB();
//comment below dbconnect

// middlewares
app.use(express.json());
app.use('/', productRoute);
app.use('/api/v1', userRoute)

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})