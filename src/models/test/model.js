'use strict';

const
    modelName = 'Tests';

module.exports = (sequelize, DataTypes)=> {

    const Tests = sequelize.define(modelName, {
            id: {
                field: 'id',
                type: DataTypes.UUID,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
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
            // tableName: 'test',
            // classMethods: {
            //     associate: (models) {
            //         // this.belongsTo(models['Bank'], {as: 'Bank', foreignKey: 'bankId'});
            //         // this.belongsTo(models['Client'], {foreignKey: 'clientId', as: 'Client'});
            //     }
            // }

        });
    return Tests;
};