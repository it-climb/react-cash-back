'use strict';

const
    modelName = 'Tests';

module.exports = (sequelize, DataTypes)=> {

    const Tests = sequelize.define(modelName, {
            testId: {
                field: 'test_id',
                type: DataTypes.UUID,
                primaryKey: true
            },
            testName: {
              field: 'test_name',
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            testLastname: {
              field: 'test_lastname',
                type: DataTypes.STRING(30),
                allowNull: false,
            },
        }, {
            tableName: 'test',
            // classMethods: {
            //     associate: (models) {
            //         // this.belongsTo(models['Bank'], {as: 'Bank', foreignKey: 'bankId'});
            //         // this.belongsTo(models['Client'], {foreignKey: 'clientId', as: 'Client'});
            //     }
            // }

        });
    return Tests;
};