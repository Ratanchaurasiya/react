import express from 'express';
import cors from 'cors';
import { user_modal } from './db/user.js';

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
    try {
        const user = new user_modal(req.body);
        const result = await user.save();
        res.send({success: true, data: result});
    } catch (error) {
        res.status(500).send({success: false, message: error.message});
    }
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Backend server running on port ${PORT}`);
});