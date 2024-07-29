const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');


app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;

connectDB();

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/task', taskRoutes);


app.get('/', (req, res) => {
    res.send("Server is up and running...");
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
