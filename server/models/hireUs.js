

module.exports = function (sequelize, DataTypes) {
    let Contact = sequelize.define("Contact", {
        who: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [1]
            }
        }, 
        email: {
            type: DataTypes.STRING, 
            allowNull: false,
            validate: {
                isEmail: true
            }
        }, 
        phone: {
            type: DataTypes.INTEGER,
            allowNull:false, 
            validate: {
                isNumeric
            }
        }, 
        company: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [1]
            }
        }, 
        project: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [1]
            }
        }, 
        deadline: {
            type:DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [1]                
            }
        }, 
        budgetRange: {
            type: DataTypes.STRING, 
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }, 
        audience: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [1]
            }
        }
    })
}