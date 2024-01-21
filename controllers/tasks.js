const Task = require('../models/Task')


const createTask = async(req,res) =>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({success:true,data:task,mssg:"TASK created"})
        
    }catch(err){
        res.status(500).json({success:false,error:err})
    }
}
const getAllTasks = async(req,res) =>{
    try{
        const task = await Task.find({})
        res.status(200).json({success:true,data:task,mssg:"received all tasks",amount:task.length})
        // res.status(200).json({task})

    }catch(err){
        res.status(500).json({success:false,error:err})

    }

}
const getOneTask = async(req,res) =>{
    const {id:taskID} = req.params
    try{
        const task = await Task.findOne({_id:taskID})
        res.status(200).json({success:true,data:task,mssg:"task achieved"})
        
        if(!task){
        return res.status(404).json({success:false,mssg:`task not found by ${taskID}`})
    
        }

    }catch(err){
        res.status(500).json({success:false,error:err})

    }

}
const updateTask = async(req,res) =>{
    const {id:taskID} = req.params
    try{
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,runValidators:true
        })
        res.status(200).json({success:true,data:task,mssg:"updated task"})
        if(!task){
            res.status(404).json({mssg:`no task found by ${taskID}`})
        }
    }catch(err){
        res.status(500).json({success:false,error:err})

    }

}
const deleteTask = async(req,res) =>{
    const {id:taskID} = req.params
    try{
        const task = await Task.findOneAndDelete({_id:taskID})
        res.status(200).json({success:true,data:task,mssg:"task deleted successfully"})
        if(!task){
            res.status(404).json({mssg:`no task found by ${taskID}`})
        }
    }catch(err){
        res.status(500).json({success:false,error:err})

    }

}
module.exports = {createTask,getAllTasks,getOneTask,updateTask,deleteTask}