const db = require('../models');
const passport = require('passport');
const authenticationMiddleware = require('../passport/authenticationMiddleware');


module.exports = function(app) {

    // Google OAuth 2
    app.get('/auth/google',
    passport.authenticate('google', { scope: 
        [ 'https://www.googleapis.com/auth/plus.login',
        , 'https://www.googleapis.com/auth/plus.profile.emails.read' ] }
    ));

    app.get('/auth/google/callback', 
    passport.authenticate( 'google', { 
        successRedirect: '/',
        failureRedirect: '/login'
    }));

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
}//End of module.exports        