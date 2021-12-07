// Dotenv
if (process.env.NODE_ENV == "production") {
    require('dotenv').config();
} else {
    const {resolve} = require('path');
    require('dotenv').config({ path: resolve(__dirname, "../.env.development") });
}

// Dependencies
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middlewares
console.log('Setting middlewares ...');
app.use(cors({
    origin: (process.env.FRONTEND_ENDPOINT || "http://localhost:8080").replace(/\/$/, ''),
    exposedHeaders: ['accesstoken']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

// Database
const db = require('./models');
(async () => await db.db_init())();

// Email
const mailer = require('./utilities/email');
mailer.init_mailer();

// Routes
console.log('Setting routes ...');
app.use('/api/users', require('./routes/user.route'));
app.use('/api/rooms', require('./routes/room.route'));
app.use('/api/meetings', require('./routes/meeting.route'));
app.use('/api/participants', require('./routes/participant.route'));
app.use('/api/util', require('./routes/util.route'));
app.use('/api/system', require('./routes/system.route'));
app.use('/api/reviews', require('./routes/review.route'));

// Server test
app.get('/', (req, res) => {
    res.send('Hello there!');
});

// Start project
console.log('Starting project ...');
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
