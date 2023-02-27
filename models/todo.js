const mongoose =require('mongoose')
 

const TodoSchema =new mongoose.Schema({
    title:String,
    about:String,
    html: String,
    date: String,
    time: String,
    set:String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})


module.exports = todo = mongoose.model("todo", TodoSchema);
