const express = require('express');
const router = express.Router();
const Task = require('../models/task')
const User = require('../models/user')
//get tasks
router.get('/tasks',(req,res,next)=>{
    Task.find(function(err,tasks){
        res.json(tasks)
    })

});
//add task
router.post('/task',(req,res,next)=>{
    let newTask = new Task({
        description: req.body.description,
        list: req.body.list,
        user: req.body.user
    })
    newTask.save((err, task)=>{
        if(err){
            res.json({msg: 'Failed to add'});
        }else{
            res.json({msg: 'add successful'});
        }
    });
});
//delete task
router.delete('/task/:id',(req,res,next)=>{
    Task.remove({_id:req.params.id},function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    });
});
//update task
router.put('/task/:id',(req,res,next)=>{
   var newTask= {
    description: req.body.description,
    list: req.body.list,
    user: req.body.user
};
     Task.updateOne({_id:req.params.id},{$set:newTask},function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    });

});
//----------------------------------------------------------------

//get users
router.get('/users',(req,res,next)=>{
    User.find(function(err,users){
        res.json(users)
    });
});
//add user
router.post('/user',(req,res,next)=>{
    let newUser = new User({
        full_name: req.body.full_name,
        phone: req.body.phone,
        adr: req.body.adr,
        pwd: req.body.pwd
    })
    newUser.save((err, user)=>{
        if(err){
            res.json({msg: 'Failed to add'});
        }else{
            res.json({msg: 'add successful'});
        }
    });
});
//delete task
router.delete('/user/:id',(req,res,next)=>{
    Task.remove({_id:req.params.id},function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    });
});

module.exports=router; 