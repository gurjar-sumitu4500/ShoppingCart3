var express = require('express');
var userRouter = express.Router();
var newUser = require('../database/models');


userRouter.post('/',(req,res)=>{
    res.redirect('index.html');
});


userRouter.post('/register',(req,res)=>{
        var myUser = new newUser ({
            "name": req.body.name,
            "email": req.body.email,
            "phone": req.body.phone,
            "password": req.body.password
        });
        
        myUser.save().then(data=>console.log(data));
        res.redirect('index.html');
})

userRouter.post('/userhomepage',(req,res)=>{
    var username = req.body.email;
    var password = req.body.password;
    
    let posts = newUser.findOne({email:username}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            if(posts.password == password){
                console.log("Success");
                res.redirect('userhomepage.html');
            }else{
                console.log("failure");
                res.redirect('index.html');
                console.log(posts.password);
                console.log(posts.name);
                console.log(req.body.password);
            }
        }
    });

})
module.exports = userRouter;
