const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./models');
const mailer = require('./utilities/email');

// Middlewares
console.log('Setting middlewares ...');
app.use(cors({
    origin: "http://localhost:8080",
    exposedHeaders: ['accesstoken']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

// Dotenv
require('dotenv').config();

// Database
(async () => await db.db_init())();

// Email
mailer.init_mailer();

// Routes
console.log('Setting routes ...');
app.use('/api/users', require('./routes/user.route'));
app.use('/api/rooms', require('./routes/room.route'));
app.use('/api/meetings', require('./routes/meeting.route'));
app.use('/api/participants', require('./routes/participant.route'));
app.use('/api/util', require('./routes/util.route'));

// Server test
app.get('/', (req, res) => {
    res.send('Hello there!');
});

// Start project
console.log('Starting project ...');
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
