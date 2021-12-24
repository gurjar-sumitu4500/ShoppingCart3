var mongoose = require('mongoose');

try{
     mongoose.connect('mongodb://127.0.0.1:27017/ShoppingCart',()=>
     {console.log("DB connected!")});
}catch(error){
    console.log("Error in db connection: " , error);
}

module.exports = mongoose;
