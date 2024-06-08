import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';





//app config

const app = express();
const port = 4002;



//middleware
connectDB();
app.use(express.json());
// access backend from frontebd
app.use(cors()); 
// dont forget to add () after cors it should run as it it fn




// api end points
app.get('/api/food',foodRouter);



app.get('/',(req,res)=>{
    res.send("backend working at /"); 
})



app.listen(port,()=>{
    console.log(`server started running ${port}`)
})




// mongodb+srv://varshalearner:Varsha@123@cluster0.aaibknx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0