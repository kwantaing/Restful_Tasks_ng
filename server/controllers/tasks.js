var express = require('express');
var app = express();
const mongoose = require('mongoose'),
Task = mongoose.model('Task')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
module.exports = {
    index: function(req, res){
        Task.find({}, function(err,tasks){
          if(err){
            console.log("something went wrong")
            res.json({error:"errors"})
          }
            res.json({tasks:tasks})
        })
    },

    newPage: function(req,res){
      res.render('index')
    },
    
    detail: function(req,res){
      Task.findOne({_id:req.params.id},function(err,task){
        if(err){
          res.json({error:"No tasks with that id"})
        }
        else{
          res.json({task:task})
        }
      })
    },
    create: function(req,res){
      var task = new Task({title:req.body.title, description: req.body.description});
      task.save(function(err){
        if(err){
          console.log("something went wrong")
          res.json({message:"Error"})
        }else{
          console.log("successfully added");
          res.json({message: "Added new task",task:task})
        }
      })
    },

    update: function(req,res){
      Tasks.findOneandUpdate({_id:req.params.id},{$set: {title:req.body.title, description: req.body.description}}, function(err, task){
        if(err){
          console.log("something went wrong")
          res.json({message:"Error"})
        }else{
          res.json({task:task})
        }
      })
    },

    delete: function(req,res){
      Task.findOneAndDelete({_id: req.params.id}, function(err){
        if(err){
          res.json({error: err})
        }else{
          res.redirect('/tasks')
        }
      })
    }
}