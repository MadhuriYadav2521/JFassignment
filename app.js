import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import empRoute from "./routes/employeeRoute.js";
const app = express();
dotenv.config();
app.use(morgan('dev'));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))


mongoose.connect(process.env.CONNECTION)
.then(() => console.log("db connected"))
.catch((err) => console.log("error",err));



app.listen(process.env.PORT, ()=> console.log(`working on port ${process.env.PORT} `));