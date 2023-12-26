import express from "express";

const app = express();
const PORT = 4000;

app.get("/",(req,res)=>{
    res.send("welcome to home")
})

app.listen(PORT, ()=>{
    console.log("welcome to the server")
})
