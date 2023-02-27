const express = require("express");
const User = require("../models/user.js");
const router = express.Router();

router.post("/", async (req, res) => {
  const { password, email } = req.body;
  if (!email) return res.status(400).send("username is required");
    if (!password) return res.status(400).send("password is required");
    
  let user = await User.findOne({ email });
    if (!user) return res.status(404).send("email not found");
    
    const isMatch = await user.checkPassword(password);
    if (!isMatch) return res.status(400).send("password not found");
    res.send(user.getToken());
});
module.exports = router;
