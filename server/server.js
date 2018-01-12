const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
require('./passport/passport');

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

//Authentication Packages
const MySQLStore = require('express-mysql-session')(session);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //TODO what the heck is this true mean
app.use(bodyParser.text());
app.use(cookieParser());
const options = {
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database,
    port: 3306
}
const sessionStore = new MySQLStore(options);
app.use(session({   
    secret: 'OnceThereWasABoyWhoLikedToys',
    resave: false,
    store: sessionStore,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', function (req, res) {
    res.sendfile('testLogin.html');
});

app.get('/success', function (req, res) {
    res.sendfile('successfulLogin.html');
});
if (process.env.NODE_ENV == 'production') {
    app.use(express.static("../build"));
    app.get("*", function(req, res){
        res.sendFile('../build/index.html');
    })

}
else {
    app.use(express.static("../src"));
}

require('./routes/fishApiRoutes.js')(app);
require('./routes/userLoginRoutes.js')(app);
require('./routes/walletApiRoutes.js')(app);
require('./routes/aquariumApiRoutes.js')(app);


db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });
});