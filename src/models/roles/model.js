'use strict';

const modelName = 'Test';

module.exports = (sequelize, DataTypes)=> {

    return sequelize.define(modelName, {
        professioId: {
            field: 'profession_id',
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
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
        underscored: true,
        tableName: 'professions',
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