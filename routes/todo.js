const express = require("express");
const jwt = require("jsonwebtoken");
const Todo = require("../models/todo");
const router = express.Router();

router.get("/", async(req, res) => {
        const token = req.header("x-auth-token");
        if (!token) return res.status(403).send("login ");
        try {
        req.user = jwt.verify(token, "thistakenoutfixion6@5!2!@@_)");
        } catch (err) {
        res.status(401).send("Invaild token");
        }
    const dataUser = await Todo.find({ user: req.user._id })
      return res.send(dataUser);

})


router.delete("/del/:id", async (req, res) => {
  id = req.params["id"];

  const token = req.header("x-auth-token");
  if (!token) return res.status(403).send("Invaild token try login agine ");
  
  try {
    let user = jwt.verify(token, "thistakenoutfixion6@5!2!@@_)");
    const dataUser = await Todo.find({ user: user._id, _id: id });
    console.log(dataUser[0]._id);
    console.log(dataUser);
     Todo.deleteOne({ _id: dataUser[0]._id })
       .then(function () {
         res.status(200).send("todo is deleted");
         console.log("Data deleted"); // Success
       })
  } catch (err) {
    return res.send("user error on deleted or login")
  }


});


router.post("/", async (req, res) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(403).send("login ");
  try {
    req.user = jwt.verify(token, "thistakenoutfixion6@5!2!@@_)");
  } catch (err) {
    res.status(401).send("Invaild token");
  }
  const { title, about, date,html,set,time } = req.body;
  let todo = new Todo({ title, about, html,date,time,set:Date.now(), user: req.user._id });
  await todo.save();

  return res.send(todo);
});

module.exports = router;
