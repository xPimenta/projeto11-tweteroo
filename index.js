import express from 'express'
import cors from 'cors'

let user = []
let tweets = []

const app = express();
app.use(cors());
app.use(express.json())

app.post("/sign-up", (req,res) =>{
    const signInData = req.body;
    user.push(signInData);
    res.status(201).json("OK")
})

app.post("/tweets", (req,res)=>{
    const tweetData = req.body;
    const userData = user.find(user => user.username === tweetData.username)
    tweetData.avatar =  userData.avatar
    tweets.push(tweetData);
    if (!userData){
        res.send("User not found")
        return 
    }
    res.status(201).json("OK")
})

app.get("/tweets", (req,res)=>{
    res.send(tweets.slice(-10));
})

app.listen(5000, ()=>{
    console.log("Server is running on: http://localhost:5000")
})
