import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import authRouter from "./router/authRout.js"

const app = express();
const PORT = 3000
app.use(cors({
    origin: "http://localhost:5173",
  }));
app.use(express.json())

app.use('/api/auth', authRouter)


mongoose.connect("mongodb://localhost:27017/authDB_signUp")
.then(()=>{ console.log("DB connected")})
.catch((error)=>{ console.log("DB error",error)})

app.listen(PORT,()=>{
    console.log("server is running on port "+PORT)
})