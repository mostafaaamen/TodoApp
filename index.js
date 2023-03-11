const express = require("express")
const mongoose = require("mongoose")
const User =require("./models/user")
const app = express()
var path = require("path");

const cors  =require('cors')

// mongoose.connect("mongodb://127.0.0.1:27017/todo");
mongoose.connect(
  "mongodb+srv://mostafaamen:zxcvbnmzxcvbnm@main.8wpa62d.mongodb.net/?retryWrites=true&w=majority"
).catch(err=>console.log(err) )

app.use(express.json())

app.use(cors())
require("./routes/index.js")(app);

const port = process.env.PORT || 3001;

// app.use(express.static('../client/bulid'))
app.use( express.static(path.join(__dirname, "/public")));

app.get("*", (req, res) => {

       res.sendFile(path.join(__dirname, '/public', 'index.html'));

})
app.get("/login", (req, res) => {

       res.sendFile(path.join(__dirname, '/public', 'Ads.txt'));

})

app.listen(port, () => console.log("server running"));

