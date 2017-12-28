
// - Thing
// --- User_Fish_Inventor
// --- Aquarium*
// --- Aquarium_Decorations*
// --- Fish*
// --- Fish_Supplies*
// - Price

module.exports = function(sequilize, DataTypes) {
    let StoreInventory = sequilize.define("StoreInventory", {
        aquarium: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        aquariumCost: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        aquariumDecorations: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        aquariumDecorationsCost: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        fish: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        fishCost: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        fishSupplies: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        fishSuppliesCost: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });

    return StoreInventory;
};