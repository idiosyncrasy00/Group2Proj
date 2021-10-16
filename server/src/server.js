const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./models');

// Middlewares
console.log('Setting middlewares ...');
app.use(cors({
    origin: "http://localhost:8080"
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
db.sequelize.sync();

// Routes
console.log('Setting routes ...');
app.use('/api/users', require('./routes/user.route'));
app.use('/api/room', require('./routes/room.route'));

// Start project
console.log('Starting project ...');
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
