const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const reportRoutes = require('./BACKEND/routes/reports');

//app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(reportRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://dilip93:dilip123@hospital-management.jyxg4.mongodb.net/hospitalManagement?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected')
})
.catch((err) => console.log('DB connection error', err))

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
});