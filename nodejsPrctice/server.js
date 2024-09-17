require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const Cors = require('cors');
const corsOption = require('./config/corsOption');
const { logEvents, logger } = require('./middleware/logEvents');
const { errorHandler } = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDb = require('./config/dbConn');
const PORT = process.env.PORT || 3500;

connectDb();

app.use(logger);


app.use(credentials);

app.use(Cors(corsOption));

// MiddleWare for form data
app.use(express.urlencoded({ extended: false }));


// MiddleWare for Json Files and Request
app.use(express.json());

//middleware for cookie

app.use(cookieParser());

// middleWare for Static Files

app.use(express.static(path.join(__dirname, '/public')))

app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use(verifyJWT);
app.use('/employees', require('./routes/api/employees'));



app.all('*', (req, res) => {
    res.status(404)
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to mongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

