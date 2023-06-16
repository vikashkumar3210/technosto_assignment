const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./timeLogRoute');
const app = express();
mongoose.mongoose.connect('mongodb+srv://logan:logan%402000@inotebook-cluster.cflpmda.mongodb.net/assignmentDB?retryWrites=true&w=majority')
    .then(() => { console.log("connected") })
    .catch((error) => { console.log(error) });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("<form action='/' method='post'><input type='time' name='start'> <button type='submit'>click</button></form>");
})
app.use(router);
app.post('/', (req, res) => {
    console.log(req.body);
    console.log(typeof req.body.start);



    res.send('done');
})
app.listen(process.env.PORT || 3000, () => {
    console.log("server started");
})