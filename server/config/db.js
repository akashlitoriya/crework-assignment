const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
        });
        mongoose.set('debug', true);
        console.log(`MongoDB Connected`);
    }catch(err){
        console.log("Failed to connect to MongoDB: ", err.message);
        process.exit(1);
    }
}

module.exports = connectDB;