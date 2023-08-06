import mongoose from "mongoose";
import { Schema } from "mongoose";

const empSchema = new Schema({
    empName : String,
    empSalary: Number,
    empDept : String
})

export default mongoose.model("Employees", empSchema)