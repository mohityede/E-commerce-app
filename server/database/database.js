import mongoose from 'mongoose';

export const connectDB = ()=>{
    const dbURL = process.env.DB_URL;
    mongoose.connect(dbURL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data)=>{
        console.log(`mongoDB database connected with server: ${data.connection.host}`);
    }).catch((err)=>{
        console.log(`Error in connection with Database: ${err}`);
    });
}