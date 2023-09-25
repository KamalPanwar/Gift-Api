import app from './app.js';
import mongoose from 'mongoose';
import 'dotenv/config';


const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
  console.log('DB connections successful!');
});

app.listen(3000, () => {
  console.log(`server is running on port:3000`);
});
