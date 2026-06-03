import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/registration")
  .then(() => console.log("MongoDB Connected to 'registration' database"))
  .catch((err) => console.log(err));