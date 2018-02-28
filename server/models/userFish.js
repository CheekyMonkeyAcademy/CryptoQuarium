//TODO make sure move has a z index.

// - Name - Implement only on user fish
// - Species
// - Graphic
// - movement min
// - movement max
// - % movement time
// - movement height min
// - movement height max

module.exports = function (sequelize, DataTypes) {
    let UserFish = sequelize.define("UserFish", {
        // A user owned fish will have a name (optional)
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        codeSpecies: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        color1r: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        color1b: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        color1g: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        color2r: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        color2b: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        color2g: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        degree: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        percent: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        forSale: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            default: 0.0
        }
    });

    UserFish.associate = (models) => {
        UserFish.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return UserFish;
};