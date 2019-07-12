var mongoose = require('mongoose');

module.exports = function(app){
    var TaskSchema = new mongoose.Schema({
        title: {type: String, required:true},
        description:{type:String, default:""},
        completed: {type: Boolean, default: false},
    },{timestamps:true})
    mongoose.model('Task', TaskSchema);
    var Task = mongoose.model('Task');
}