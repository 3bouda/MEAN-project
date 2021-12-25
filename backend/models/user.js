const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    full_name:{type:String,required:true},
    phone:{type:String,required:true},
    adr:{type:String,required:true},
    pwd:{type:String,required:true}
});
const User = module.exports = mongoose.model('User', UserSchema);