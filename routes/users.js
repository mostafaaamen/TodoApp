
const express = require('express')
const User=require("../models/user.js")
const router = express.Router()

router.post("/", async (req, res) => {
    const { username, password, email } = req.body;

    let emailFound = await User.findOne({ email })
    if(emailFound) return res.status(401).send("this email found in data base please try ather email")
    const user = new User({
        username,
        password,
        email
    });
    console.log(user)
  await user.save();
  res.send(user.getToken());
});
module.exports = router;

