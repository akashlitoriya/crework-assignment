const Task = require('../models/Task');
const uuid = require('uuid4');

const createTask = async(req, res) => {
    try{
        const {title, description, status, deadline, priority} = req.body;
        if(!title || !status){
            return res.status(400).json({message:"All fields are required"});
        }
        if(status !== "To do" && status !== "In progress" && status !== "Completed" && status !== "Under Review"){
            return res.status(400).json({message:"Invalid status"});
        }
        const user_id = req.user.id;
        const task_id = uuid();
        const task = new Task({title, description, status, deadline, task_id, user_id, priority});
        await task.save();
        res.status(201).json({message:"Task created successfully"});
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
}

const editTask = async(req, res) =>{
    try{
        const task_id = req.params.id;
        const user_id = req.user.id;
        const {title, description, status, deadline} = req.body;
        const task = await Task.findOne({task_id, user_id});
        if(!task){
            return res.status(404).json({message:"Task not found"});
        }
        if(title){
            task.title = title;
        }
        if(description){
            task.description = description;
        }
        if(status){
            if(status !== "To do" && status !== "In progress" && status !== "Completed" && status !== "Under Review"){
                return res.status(400).json({message:"Invalid status"});
            }
            task.status = status;
        }
        if(deadline){
            task.deadline = deadline;
        }
        await task.save();
        res.status(200).json({message:"Task updated successfully"});
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
}

const deleteTask = async(req, res) =>{
    try{
        const task_id = req.params.id;
        const user_id = req.user.id;
        const task = await Task.findOne({task_id, user_id});
        if(!task){
            return res.status(404).json({message:"Task not found"});
        }
        await task.remove();
        res.status(200).json({message:"Task deleted successfully"});
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
}

const getTodoTask = async(req, res) => {
    try{
        const user_id = req.user.id;
        const tasks = await Task.find({user_id, status:"To do"});
        res.status(200).json(tasks);
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
}

const getCompletedTask = async(req, res) => {
    try{
        const user_id = req.user.id;
        const tasks = await Task.find({user_id, status:"Completed"});
        res.status(200).json(tasks);
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
}
const getUnderReviewTask = async(req, res) => {
    try{
        const user_id = req.user.id;
        const tasks = await Task.find({user_id, status:"Under Review"});
        res.status(200).json(tasks);
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
}

const getInProgressTask = async(req, res) => {
    try{
        const user_id = req.user.id;
        const tasks = await Task.find({user_id, status:"In progress"});
        res.status(200).json(tasks);

    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
}

module.exports = {createTask, editTask, deleteTask, getCompletedTask, getTodoTask, getUnderReviewTask, getInProgressTask};