let db = require('../models');

module.exports = function(app) {
    // TODO add funds to wallet from bank (unable to validate remote source as yet - will use fake money for now)
    app.post('/api/addFundsToWallet/', (req, res) => { 
        let validated = true;
        let amount = 0;
        // TODO validate funds at remote target (???)
        if (validated) {
            amount = req.body.amount;
            // amount = 10 // --- TEST VALUE
        }

        db.User.findOne({
            where: {
                id: req.user.id
                // id: 1  // --- TEST VALUE
            }
        })
        .then((user) => {
            let currentBalance = user.dataValues.walletBalance;
            let newBalance = currentBalance + amount;
            console.log(`Current Bal: ${currentBalance} - new balance: ${newBalance}`);
            user.update({walletBalance: newBalance})
            .then(() => {
                db.WalletHistory.create({
                    UserId: req.user.id,
                    // UserId: 1, //--- TEST VALUE
                    walletBalanceChange: amount,
                    walletBalanceChangeReason: "Deposit from bank account",
                    lastWalletBalance: newBalance
                });
                res.json({"newBalance": newBalance});
            });
        })
    });

    app.get('/api/viewWalletHistory/', (req, res) => { // --- TEST VALUE

        db.WalletHistory.findAll({
            where: {
                UserId: req.user.id
            }
        })
        .then((history) => {
            res.json(history);
        })
    });


    // TODO remove funds from wallet to bank (???? requires remote source - so not yet)

} // End module.exports