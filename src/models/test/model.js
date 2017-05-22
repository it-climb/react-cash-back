'use strict';

const modelName = 'Test';

module.exports = (sequelize, DataTypes)=> {

    return sequelize.define(modelName, {
        testId: {
            field: 'test_id',
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        testName: {
            field: 'test_name',
            type: DataTypes.STRING(30),
            allowNull: false,
            defaultValue: ''
        },
        test_lastname: {
            field: 'test_lastname',
            type: DataTypes.STRING(30),
            allowNull: false,
            defaultValue: ''
        },
    }, {
        underscored: true,
        tableName: 'test',
    })
};