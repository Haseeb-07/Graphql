const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false, // Changed to optional if needed
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId, // Assuming you reference users
    required: true,
    ref: 'User', // Reference to the User model if applicable
  },
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
