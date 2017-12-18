const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");


app.get('/api', (req, res) => res.send('Hello backend world!'));

require('./routes/fishApiRoutes.js')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


app.use(express.static("../src"));

db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>{
        console.log(`App listening on PORT ${PORT}`);
    });
});