const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    name:{type:String,required:[true,'Enter name field'],max:[20,'no more than 20 characters']},
    completed:{type:Boolean,default:false}
})

module.exports = mongoose.model('Task',TaskSchema)