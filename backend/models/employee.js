const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  position: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
  admissionDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  terminationDate: {
    type: DataTypes.DATE,
  },
});

module.exports = Employee;
