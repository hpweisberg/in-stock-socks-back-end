'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sock.init({
    name: DataTypes.STRING,
    size: DataTypes.NUMBER,
    color: DataTypes.STRING,
    pattern: DataTypes.STRING,
    inStock: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    material: DataTypes.STRING,
    quantity: DataTypes.NUMBER,
    style: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sock',
  });
  return Sock;
};