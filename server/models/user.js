module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        provider: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        displayName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        }

    });

    User.associate = function(models) {
        User.hasMany(models.UserFish, {
            onDelete: "cascade"
        });
    };

    return User;
};