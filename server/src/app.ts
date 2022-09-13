
import express from 'express';
import db from './config/database.config';
import cors from 'cors';
import 'dotenv/config'



import usersRouter from './routes/user';


db.sync().then(() => {
  console.log('connect to db');
});

const app = express();

app.use(cors())
app.use(express.json());

app.use('/user', usersRouter);



const port = 3000;

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});

export default app;
