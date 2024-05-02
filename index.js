import express from 'express'
import mongoose from 'mongoose'
import router from './Routes/ProgrammerRoute.js';
const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/restApiCRUD")
app.use(express.json());

app.use('/programmer', router)

app.listen(9000, () =>{
    console.log("listening");
})