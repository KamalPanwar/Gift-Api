import app from './app.js';
import mongoose from 'mongoose';
import 'dotenv/config';

const port = process.env.port;
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
  console.log('DB connections successful!');
});

app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});
