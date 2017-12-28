//TODO make sure move has a z index.

// Fish_Templates.js
// - Name - Implement only on user fish
// - Species
// - Graphic
// - movement min
// - movement max
// - % movement time
// - movement height min
// - movement height max

module.exports = function(sequelize, DataTypes) {
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
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        movementMin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        movementMax: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        movementPercent: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        movementHeightMin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        movementHeightMax: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
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
