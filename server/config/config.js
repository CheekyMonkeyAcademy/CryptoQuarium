require('dotenv').config(); // this is important!
module.exports = {
    "development": {
        "username": "writing_admin",
        "password": "password",
        "database": "cryptoquarium_db",
        "host": "localhost",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "xusername": "bt41m09cw9l1knjo",
        "xpassword": "ej72szle2656mc2i",
        "xdatabase": "amml5q31hdinbry5",
        "host": "qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        "dialect": "mysql"
    }
}
