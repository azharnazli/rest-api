const {
  hash
} = require('../helper/bcrypt')

'use strict';
const { Op } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique(value) {
          return User.findOne({
            where : {
              email : value,
              id : {[Op.ne] : this.id}
            }
          })
            .then( users => {
              if(users) {
                throw new Error(`email already registered`)
              }
            })
            .catch(err => {
              throw err
            })
        }
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function (value) {
        value.password = hash(value.password)
        value.role = 'user'
      }
    }
  });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};