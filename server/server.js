const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
require('./passport/passport');

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //TODO what the heck is this true mean
app.use(bodyParser.text());
app.use(cookieParser());
app.use(session({ secret: 'YES' }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {
    res.sendfile('test.html');
});

app.get('/success', function (req, res) {
    res.sendfile('success.html');
});

app.use(express.static("../src"));

require('./routes/fishApiRoutes.js')(app);
require('./routes/userLoginRoutes.js')(app);
require('./routes/walletApiRoutes.js')(app);


db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });
});