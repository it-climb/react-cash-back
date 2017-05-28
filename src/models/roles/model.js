'use strict';

const modelName = 'Roles';

module.exports = (sequelize, DataTypes)=> {

  return sequelize.define(modelName, {
    professioId: {
      field: 'role_id',
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    description: {
      type: DataTypes.TEXT,
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
    tableName: 'roles',
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