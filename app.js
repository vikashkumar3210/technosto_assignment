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
app.use(router);
app.listen(process.env.PORT || 3000, () => {
    console.log("server started");
})
