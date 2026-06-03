const express = require('express');
const path = require('path');
const cors = require('cors');
const {user_model} = require('./db/');
const { wait } = require('@testing-library/user-event/dist/utils');
const app = express();
app.use(cors());
app.use(express.json());
// const staticPath = path.join(__dirname, 'public');// with this we are displaying the static files in the public folder, 
app.post("/Registration",async (req, res) => {
    const user = user_model(req.body);
    const awaite = await awaite.save();
    res.send("Data received");
// app.get('/', (req, res) => {
//     res.sendFile(path.join(staticPath, 'login.html'));//displaying frontend file in the backend server.
// app.get('/', (req, res) => {
//     res.send('Printing Hello World from Express');
// });
// app.get('/index', (req, res) => {
//     res.send('This is the index page');
// });
});
app.listen(3000);