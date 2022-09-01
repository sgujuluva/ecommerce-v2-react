import express from "express";
import "dotenv/config";
import { Low, JSONFile } from 'lowdb'

const app = express();
//lowdb
const adapter = new JSONFile(file)
const db = new Low(adapter)

//read data from json
await db.read();

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log("Server running at the PORT 5000");
})

const uid = () => {
    return Date.now().toString(16)
}

app.post("/api/signup", async(req, res) => {
    if (db.data.users.some(item => item.email !== req.body.email)){
        db.data.users.push(req.body);
        await db.write();
        res.send({user: req.body, msg : "user added to db", success : true})
    }else {
        res.send({msg:"user already exist"})
    }
   
})