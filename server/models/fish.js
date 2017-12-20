//TODO make sure move has a z index.

// Fish_Templates.js
// - Name - Implmeent only on user fish
// - Species
// - Graphic
// - movement min
// - movement max
// - % movement time
// - movement height min
// - movement height max

module.exports = function(sequelize, DataTypes) {
    let Fish = sequelize.define("Fish", {
        // An individual fish has no 'name' just a species 
        // A user owned fish will have a name
        // name: { 
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }
        // },
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

    // Fish.associate = function(models) {
    //     Story.hasMany(models.Line, {
    //         onDelete: "cascade"
    //     });

    //     Fish.hasMany(models.Permission, {
    //         onDelete: "cascade"
    //     });
    // }

    return Fish;
};