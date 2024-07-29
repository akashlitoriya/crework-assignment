const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    status:{
        type: String,
        enum:['To do','In progress','Under Review','Completed'],
        required: true
    },
    deadline:{
        type: Date,
    },
    task_id:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Task', taskSchema);