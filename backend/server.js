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

    let checkEmail = db.data.users.find(item => item.email !== req.body.email)

    if (checkEmail){

        let newUser = req.body;
        newUser.id = uid();
        db.data.users.push(newUser);

        await db.write();

        res.send({user: newUser, msg : "user added to db", success : false})
    }else {
        res.send({user: req.body,msg:"user already exist",success : true})
    }
   
})