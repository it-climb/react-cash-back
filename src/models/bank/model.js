'use strict';

const
    modelName = 'Bank';

module.exports = (sequelize, DataTypes)=> {

    return [
        /**@typedef {{}} Bank*/
        sequelize.define(modelName, {
            bankId: {
                field: 'bank_id',
                type: DataTypes.UUID,
                primaryKey: true
            },
            mfo: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
                defaultValue: ''
            },
            createdAt: {
                type: DataTypes.DATE,
                field: 'created_at'
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: 'updated_at'
            }
        }, {
            tableName: 'banks',
            // classMethods: {
            //     associate: (models) {
            //         // this.belongsTo(models['Bank'], {as: 'Bank', foreignKey: 'bankId'});
            //         // this.belongsTo(models['Client'], {foreignKey: 'clientId', as: 'Client'});
            //     }
            // }

        })
    ]
};