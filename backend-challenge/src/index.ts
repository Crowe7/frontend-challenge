import express from 'express';
import 'dotenv/config'
import { connectToMongo } from './services/mongo.service.js';
import { loremRouter } from './routes/lorem.js';
const app = express();

const port = process.env.PORT || 8080;

connectToMongo()
  .then(() => {
    app.use("/lorem", loremRouter);

    app.listen(port, () => {
      console.log(`server running at http://localhost:${port}`);
    });
  })
  .catch((err: Error) => {
    console.error("Connection failed!",err)
  });

export {}