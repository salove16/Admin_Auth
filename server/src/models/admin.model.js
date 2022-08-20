const mongoose=require("mongoose")
const bcrypt = require("bcrypt");
const adminSchema=new mongoose.Schema({
    userName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
   password:{type:String,required:true},
   role: { type: String, required:true }
},
{
    timestamps:true,
    versionkey:false


})

adminSchema.pre("save", function (next) {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
  });
  
  adminSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

module.exports=mongoose.model("user",adminSchema)