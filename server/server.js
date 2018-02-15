const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const path = require('path');
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

require('./routes/fishApiRoutes.js')(app);
require('./routes/userLoginRoutes.js')(app);
require('./routes/walletApiRoutes.js')(app);
require('./routes/aquariumApiRoutes.js')(app);

if (process.env.NODE_ENV == 'production') {
    app.use(express.static("../build"));
    app.use(express.static(path.join(__dirname, '../build')));
    app.get("*", function(req, res){
        console.log(`PATHPATHPATHPATHPATH - we've fallen do the default path`);
        res.sendFile('index.html', { root: path.join(__dirname, '../build') });
    })
}
else {
    console.log(`################################################## using a src route`);
    // app.use(express.static("../src"));
    app.use(express.static(path.join(__dirname, '../src')));
}

if (env == 'development') {
    // Ugly hack - trying to fix a local login issue - TODO find a better way
    app.get('/MyAquarium', function(req, res){
        console.log(`##### Hitting localhost 8080 My Aquarium - this is your ugly hack to fix that locally... and hopefully not touch production #####`);
        res.redirect('http://localhost:3000/MyAquarium');
    });
}



db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });
});
