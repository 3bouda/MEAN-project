const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    description:{type:String,required:true},
    list:{type:String,required:true},
    user:{type:String,required:true},
});
const Task = module.exports = mongoose.model('Task', TaskSchema);