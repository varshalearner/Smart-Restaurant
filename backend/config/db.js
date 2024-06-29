import mongoose from 'mongoose';

export function connectDB() {
    // const encodedPassword = encodeURIComponent('Varsha@123'); // @-- > %40 
    // const uri = `mongodb+srv://varshalearner:${encodedPassword}@cluster0.aaibknx.mongodb.net/mydatabase?retryWrites=true&w=majority`;
    // const uri = `mongodb+srv://varshalearner:Varsha%40123@cluster0.aaibknx.mongodb.net/mydatabase?retryWrites=true&w=majority`;
    const uri = "mongodb://localhost:27017/foodOrdering";
    
    mongoose.connect(uri)
        .then(() => {
            console.log('Database connected successfully');
        })
        .catch((error) => {
            console.error('Database connection error:', error);
        });
}
