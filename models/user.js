const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save",async function (next) {
    const salt = await bcrypt.genSalt(10)
    let hashed = await bcrypt.hash(this.password, salt)
    this.password=hashed
    next()
    
})

UserSchema.methods.getToken = function () {
    return jwt.sign(this.toJSON(),"thistakenoutfixion6@5!2!@@_)")
}
UserSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password,this.password)
};

const User = new mongoose.model("user", UserSchema)
 
module.exports =User

