const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const studentModel = require("./modules/Student")

const app = express()
app.use(express.json())//data get from front-end to back-end pass as json file
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.post('/login', (req,res) => {
    const {username,password} = req.body
    studentModel.findOne({name:username})
    .then(user => {
        if (user){
            if (user.password === password){
                res.json("done")
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("incorrect username")
        }
        
    })
})

app.post('/register',(req,res) => {
    studentModel.create(req.body)
    .then(student => res.json(student))
    .catch(err => res.json(err))
})

app.listen(3001,() => {
    console.log("server litning from port 3001")
    console.log("server is running...")
})