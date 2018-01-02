// Things like seaweed, rocks, castles, etc, etc, etc?
// Most of the names where ideas from fishtank app, 
// we can remove or exchange any as needed


module.exports = function(sequilize, DataTypes) {
    let AquariumDecorations = sequilize.define("AquariumDecorations", {

        decoration: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        price: {
            type: DataTypes.DOUBLE,
            allownull: false,
            validate: {
                len: [1]
            }
        }
    });

    return AquariumDecorations;
};
