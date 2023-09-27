import express from "express";
import productRouter from './routes/productRouter.js'
import cors from 'cors'


const app=express()

app.use(
    cors({
      methods: "GET,POST",
      credentials: true,
    })
  );
app.use(express.json());

app.use('/api/v1/products', productRouter);

export default app