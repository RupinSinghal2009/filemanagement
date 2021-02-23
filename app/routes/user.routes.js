const controller = require("../controllers/user.controller");

module.exports = function (app){
    app.use(function(req,res,next){
        res.headers(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        )
        next();
    });

}

app.get("api/users/getAllUsers",controller.getAllUsers);
app.post("api/users/registerUsers",controller.registerUsers);
