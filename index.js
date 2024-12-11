import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import AppRoutes from "./src/routes/index.js"

const port = 8000;

const app = express();
app.use(express.json());
app.use(cors());


app.use("/",AppRoutes)

app.listen(port,()=>console.log(`App is listening to ${port}`))
