'use strict';

const
    modelName = 'Test';

module.exports = (sequelize, DataTypes)=> {

    return [
        /**@typedef {{}} Test*/
        sequelize.define(modelName, {
            bankId: {
                field: 'testId',
                type: DataTypes.UUID,
                primaryKey: true
            },
            firstName: {
                type: DataTypes.STRING(100),
                allowNull: false,
                defaultValue: ''
            },
            secondName: {
                type: DataTypes.STRING(100),
                allowNull: false,
                defaultValue: ''
            }
        }, {
            tableName: 'tests',
        })
    ]
};