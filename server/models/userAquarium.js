
// Inherits template and modifies it
// - User_Owner (ID reference)
// - Tank_Description (round bowl, small box, medium box, etc)
// - Volume (describes amount of water for user reference)
// - Num_Fish_Allowed
// - Num_Decoration_Allowed
// - Background
// - Lighting_Effect (psycadellic baby! Nicole and Robert, make this happen)
// --- Fish assigned / decorations assigned, etc


module.exports = function(sequelize, DataTypes) {
    let UserAquarium = sequelize.define("UserAquarium", {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
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
        },
        background: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lightingEffect: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });


    return UserAquarium;
};