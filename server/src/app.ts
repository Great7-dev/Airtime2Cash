import createError from "http-errors"
import express, { Request, Response, NextFunction } from 'express';
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import db from './config/database.config';
import cors from 'cors';
import userRouter from "./routes/user";
import uuvid from 'uuid'



db.sync().then(() => {
  console.log('Database conneted successfully');
}).catch((err) => {
  console.log(err)
});

const app = express();

app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join("public")));


   app.use("/users", userRouter)
  app.use()


app.use(function (req, res, next) {
  next(createError(404));
});


const port = 5555;

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});

export default app;
