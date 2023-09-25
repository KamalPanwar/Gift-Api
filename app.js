import express from "express";
import productRouter from './routes/productRouter.js'


const app=express()

app.use(express.json());

app.use('/api/v1/products', productRouter);

export default app