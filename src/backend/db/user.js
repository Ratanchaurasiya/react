import mongoose from 'mongoose';
import './config.js';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const user_modal = mongoose.model('user', userSchema);

export { user_modal };