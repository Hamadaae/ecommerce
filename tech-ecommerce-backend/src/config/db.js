const mongoose = require('mongoose');

module.exports = async function connectDB() {
    const uri = process.env.MONGODB_URI;
    if(!uri) {
        throw new Error('MONGODB_URI is not defined in environment variables');
    }
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
}