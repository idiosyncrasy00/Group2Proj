const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./models');

app.use(cors({
    origin: "http://localhost:8081"
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
db.sequelize.sync();

// Routes
app.use('/api/users', require('./routes/users'));

// Start project
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
