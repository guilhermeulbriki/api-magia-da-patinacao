import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';

import express from 'express';

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log('Server stated');
});
