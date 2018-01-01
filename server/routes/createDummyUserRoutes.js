let db = require('../models');
const authenticationMiddleware = require('../passport/authenticationMiddleware');

module.exports = function(app) {
    app.post('/api/createDummyUser', authenticationMiddleware, (req, res) => {
        userObject = {};
        const newUserObj = req.body;
        db.User.create({
            provider: req.body.provider,
            userId: req.body.userId,
            displayName: req.body.displayName,
            email: req.body.email,
            walletBalance: req.body.walletBalance
        })
        .then((user) => {
            console.log(userObject)
            res.json(userObject)
        })
    })
}