import express from "express"
// import { addEmp, empDetails, renderAddEmp, renderUpdateEmp, updateEmp } from "../controllers/empController.js";
import { addEmp, deleteEmp, empDetails, renderAddEmp, renderDeleteEmp, renderUpdateEmp, updateEmp } from "../controllers/empController.js";

const empRoute = express.Router()

empRoute.get('/empMaster',)
empRoute.get('/addEmp',renderAddEmp)
empRoute.post('/addEmp',addEmp)
empRoute.get('/empDetails/:id',empDetails)
empRoute.get('/updateEmp/:id',renderUpdateEmp)
empRoute.post('/updateEmp/:id',updateEmp)
empRoute.get('/deleteEmp/:id',renderDeleteEmp)
empRoute.post('/deleteEmp/:id',deleteEmp)

export default empRoute;