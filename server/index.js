const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');


app.use(express.json());
app.use(cors({
    origin: '*'
}))
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
