const mongoose=require("mongoose")
const bcrypt = require("bcrypt");
const userSchema=new mongoose.Schema({
    userName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
   password:{type:String,required:true},
   role: { type: String, default: 'user' }
},
{
    timestamps:true,
    versionkey:false


})



userSchema.pre("save", function (next) {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
  });
  
  userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

module.exports=mongoose.model("user",userSchema)