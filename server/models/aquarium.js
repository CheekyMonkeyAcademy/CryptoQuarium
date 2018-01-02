
module.exports = function(sequelize, DataTypes) {
    let Aquarium = sequelize.define("Aquarium", {
        tankDescription: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        numFishAllowed: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        numDecorationsAllowed: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    // These never change? So no need for a template?
    // Starter would be like a fish bowl - small / no decoration
    // - Tank_Description (round bowl, small box, medium box, etc)
    // - Num_Fish_Allowed
    // - Num_Decoration_Allowed

    return Aquarium;
};