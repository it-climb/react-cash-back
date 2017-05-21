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
            field: 'last_lastname',
            type: DataTypes.STRING(30),
            allowNull: false,
            defaultValue: ''
        },
    }, {
        underscored: true,
        tableName: 'test',
        // classMethods: {
        //     associate: function (models) {
        //         this.belongsTo(models['Test'].scope('plain'), {as: 'User', foreignKey: 'userId'});
        //     }
        // },
        // defaultScope: [
        //     {attributes: {exclude: ['billingData']}}
        // ],
        // scopes: {
        //     general : {
        //         attributes: {
        //             exclude: ['billingData']
        //         }
        //     }
        // },
        // scopedIncludes: {
        //     general: [
        //         {model: 'Image', as: 'Logo', required: false},
        //     ],
        //     withUser: [
        //         {model: 'Image', as: 'Logo', required: false},
        //         {model: 'User', as: 'User', required: true},
        //     ]
        // }
    })
};