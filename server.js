const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let latestLocation = {};

app.post("/location",(req,res)=>{

latestLocation = req.body;

console.log("Location received:", latestLocation);

res.send("ok");

});

app.get("/location",(req,res)=>{
res.json(latestLocation);
});

app.listen(3000,()=>{
console.log("Server running on port 3000");
});