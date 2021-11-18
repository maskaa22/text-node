const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const { userRouter } = require('./routes');
const {
    variablesConfig: { PORT, MONGO_CONNECT_URL }
} = require('./config');

mongoose.connect(MONGO_CONNECT_URL);

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json({ extended: true }));

app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log('messageCode.RUNNING', PORT);
});
