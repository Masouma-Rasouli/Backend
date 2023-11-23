import express from "express";
import dontenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import usersRouter from "./routers/usersRouter.js";
import recordsRouter from "./routers/recordsRouter.js"
import ordersRouter from "./routers/ordersRouter.js"
dontenv.config();
// import "./models/db-connection.js"
import dbconnect from "./models/db-connection.js";
const app = express();
app.use(express.json());
app.use(morgan("tiny")); // it can be dev or tiny
// middle ware to handle the errorss
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || "something went wrong");
});

// routes
app.use("/api/user", usersRouter); // this userRouter should be the same as what we import
app.use("/api/records", recordsRouter);
app.use("/api/order", ordersRouter);

dbconnect();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("app is running on port ", PORT));
