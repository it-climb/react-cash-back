'use strict';

const modelName = 'Users';

module.exports = (sequelize, DataTypes)=> {

  return sequelize.define(modelName, {
    userId: {
      field: 'user_id',
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    firstName: {
      field: 'first_name',
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    lastName: {
      field: 'last_name',
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    professionId: {
      field: 'profession_id',
      type: DataTypes.UUID,
      // defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    emailVerified: {
      field: 'email_verified',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    login: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    roleId: {
      field: 'role_id',
      type: DataTypes.UUID,
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
    tableName: 'users',
  })
};