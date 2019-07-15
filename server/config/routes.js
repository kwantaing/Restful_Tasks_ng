const mongoose = require('mongoose'),
    Task = mongoose.model('Task')
const tasks = require('../controllers/tasks.js');
module.exports = function(app){

    
    app.get('/tasks', function(req, res){
        tasks.index(req,res)
    })

    app.get('/tasks/:id',function(req,res){
        tasks.detail(req,res)
    })

    app.post('/tasks',tasks.create)
    app.get('/new/tasks',function(req,res){
        tasks.newPage(req,res)
    })

    app.put('/tasks/:id',tasks.update)
    app.delete('/tasks/:id',tasks.delete)
}