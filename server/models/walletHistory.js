module.exports = function(sequelize, DataTypes) {
    let WalletHistory = sequelize.define("WalletHistory", {
        walletBalanceChangeReason: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        walletBalanceChange: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            default: 0.00
        },
        lastWalletBalance: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            default: 0.00
        }
    });

    WalletHistory.associate = function(models) {
        WalletHistory.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return WalletHistory;
};