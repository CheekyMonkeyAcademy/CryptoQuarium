const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(express.static("../src"));

require('./routes/fishApiRoutes.js')(app);

db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });
});