// - Name - Implement only on user fish
// - Species
// - Graphic
// - movement min
// - movement max
// - % movement time
// - movement height min
// - movement height max

//CReate for column for randomizeVar fields 

module.exports = function (sequelize, DataTypes) {
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
        randomizeVar: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        quantityAvailable: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 1000,
            validate: {
                len: [1]
            }
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            default: 1.0,
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