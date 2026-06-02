const express = require('express');
const path = require('path');
const app = express();
const staticPath = path.join(__dirname, 'public');// with this we are displaying the static files in the public folder, 
app.post("/Registration",async (req, res) => {
    const {username, email, password} = req.body;
    console.log(username, email, password);
    const user = await User.save({username, email, password});
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