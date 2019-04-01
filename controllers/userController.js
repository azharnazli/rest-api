const {
  User
} = require('../models')

class UserController {

  static findAllUser(req, res) {
    User.findAll()
      .then(users => {
        res.status(200).json(users)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static findOneUser(req, res) {
    User.findByPk(req.params.id)
      .then(user => {
        res.status(200).json(user)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static createUser(req, res) {
    User.create({
        email: req.body.email,
        password: req.body.password
      })
      .then(user => {
        res.status(201).json(user)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static remove(req, res) {
    User.destroy({
        where: {
          id: req.params.id
        }
      })
      .then((user) => {
        res.status(204).json(user)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static editUser(req, res) {
    User.update({
        email: req.body.email,
        password: req.body.password
      },{
        where : { id : req.params.id}
      })
      .then( user => {
        res.status(200).json(user)
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

}



module.exports = UserController