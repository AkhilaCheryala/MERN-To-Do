const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todo');
console.log('db connected')
}
// Define schemas and models
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});
const User = mongoose.model('User', userSchema);

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
const Task = mongoose.model('Task', taskSchema);
const server = express();

// Middleware
server.use(cors());
server.use(bodyparser.json());

// Routes
server.post('/signup', async (req, res) => {
    try {
        const { username, email, password, tasks } = req.body;

        // Create user
        const newUser = new User({
            username,
            email,
            password,
            tasks: [] // Initialize tasks array
        });

        // Save user
        const savedUser = await newUser.save();

        // Create tasks and link them to the user
        if (Array, isArray(tasks)){
            const taskDocs = await Task.create(tasks.map(task => ({
                ...task,
                user: savedUser._id
            })));
    
        }else{
            console.error('tasks is not defined');
        } // Update user with task references
        if(taskDocs){
            savedUser.tasks = taskDocs.map(task => task._id);
            await savedUser.save();
        }
        res.json({ user: savedUser, tasks: taskDocs });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
server.listen(8080, () => {
    console.log(`Server is running`);
});
