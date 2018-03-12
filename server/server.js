const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const path = require('path');
const mysql = require('mysql');
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

// sessionStore options
const options = {
    checkExpirationInterval: 1000 * 60 * 15,// 15 min // How frequently expired sessions will be cleared; milliseconds.
    expiration: 1000 * 60 * 60 * 24 * 7,// 1 week // The maximum age of a valid session; milliseconds.
    createDatabaseTable: false,// Whether or not to create the sessions database table, if one does not already exist.
    // schema: {
    //     tableName: 'sessions',
    //     columnNames: {
    //         session_id: 'session_id',
    //         expires: 'expires',
    //         data: 'data'
    //     }
    // }
};
let dbConnectionInfo = {}

if (process.env.NODE_ENV == 'production') {
    console.log(`$$$$$$$$$$$$$$$$$$$ FOUND: ${process.env.PROD_DB_HOST} $$$$$$$$$$$$$$$$$$$`)
    dbConnectionInfo = {
        host: process.env.PROD_DB_HOST,
        port: 3306,
        user: process.env.PROD_DB_USER,
        password: process.env.PROD_DB_PASS,
        database: config.database,
    }
}
else {
    dbConnectionInfo = {
        host: config.host,
        port: 3306,
        user: config.username,
        password: config.password,
        database: config.database,
    }

}

const pool = mysql.createPool(dbConnectionInfo); 

const sessionStore = new MySQLStore(options, pool);
app.use(session({   
    secret: 'OnceThereWasABoyWhoLikedToys',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
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
