const db = require('../models');
const User = db.user;

exports.getAllUsers = (req,res) =>{
    User.find((err,users)=>{
        if (err){
            res.status(500).send({message:err});
            return;
        }
        res.send({
            status:200,
            data: users.reverse()
        });
    })
}

exports.registerUsers = (req,res) =>{
    let obj = req.body;
        const user = new User();
         for(let p in obj){
             user[p] = obj[p];
         }
         user.save((err,users)=>{
            if (err){
                res.status(500).send({message:err});
                return;
            }
            res.send({
                status:200,
                data: users.reverse()
            });
        })
    }
