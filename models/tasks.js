const moongose = require('mongoose');

const tasks = new moongose.Schema({
    name:
    {
        type:String,
        required: [true, "Name is required"],
        trim:true,
        max:[20, "Name should not be more than 20 characters"]
    },
    completed: 
    {
        type:Boolean,
        default:false
    }
});


module.exports = moongose.model('Tasks',tasks);