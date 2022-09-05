import express from "express";
import "dotenv/config";
import { Low, JSONFile } from 'lowdb'
import cors from "cors"
const app = express();
//lowdb
const adapter = new JSONFile("./db.json")
const db = new Low(adapter)

//read data from json
await db.read();

console.log("db data",db.data)

app.use(express.json());
//cors option

  app.use(cors({origin : "http://localhost:3000"}));


  
app.listen(8090, () => {
    console.log("Server running at the PORT 8080");
})

const uid = () => {
    return Date.now().toString(16)
}

app.post("/api/signup",async(req, res) => {

    let checkEmail = db.data.users.some(item => item.email === req.body.email)

    if (!checkEmail){

        let newUser = req.body;
        console.log("new user", newUser)
        newUser.id = uid();
        db.data.users.push(newUser);

        await db.write();

        res.send({user: newUser, msg : "user added to db", success : true})
    }else {
        res.send({user: req.body,msg:"user already exist",success : false})
    }
   
})