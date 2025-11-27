const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true,
        maxlength: [20, 'name cannot exceed 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


module.exports = mongoose.model('Task', taskSchema);;