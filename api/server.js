const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require("./config/db.js");

const userRoutes = require("./routes/userRoutes.js");

dotenv.config();

connectDB();

const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Api is running!');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
