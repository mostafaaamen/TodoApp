module.exports = (app)=> {
    app.use("/api/users",require("./users"))
    app.use("/api/auth",require("./auth"))
    app.use("/api/add",require("./todo"))
}
