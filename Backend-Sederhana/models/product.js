'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: 'Name is required!'
         },
         notNull: {
            msg: 'Name is required!'
         }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: 'Description is required!'
         },
         notNull: {
            msg: 'Description is required!'
         }
      }
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: 'Image is required!'
         },
         notNull: {
            msg: 'Image is required!'
         }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: 'stock is required!'
         },
         notNull: {
            msg: 'stock is required!'
         }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: 'stock is required!'
         },
         notNull: {
            msg: 'stock is required!'
         }
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};