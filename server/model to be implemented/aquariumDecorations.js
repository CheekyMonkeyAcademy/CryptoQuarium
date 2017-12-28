// Things like seaweed, rocks, castles, etc, etc, etc?
// Most of the names where ideas from fishtank app, 
// we can remove or exchange any as needed


module.exports = function(sequilize, DataTypes) {
    let AquariumDecorations = sequilize.define("AquariumDecorations", {

        gravel: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        holidayTree: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },        
        seaweed: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        rock: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        castle: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        sunkenShip: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        submarine: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        bubbleMaker: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        rustyBike: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        anchor: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        teeterTotter: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        corucopia: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        roboticTurkey: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        diver: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        hookHand: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        pillars: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        aquiaticPlant: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        driftWood: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        starFish: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        anemone: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        harpoon: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        hotAirBalloon: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        trafficCone: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        lantern: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        beachBall: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        windMill: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        pirateSkull: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        mermaid: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        pyramid: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        necklace: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        treasure: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
        golfBall: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                len: [1]
            }
        },
    });

    return AquariumDecorations;
};
