const { User } = require('../models')
const { sign } = require('../helper/jwt')
const { compare } = require('../helper/bcrypt')


class AuthController {

  static signIn(req, res) {
    User.findOne({
        where: {
          email: req.body.email
        }
      })
      .then(user => {
        if (!user) {
          res.status(404).json({
            error: 'Username atau Password salah'
          })
        } else {
          let valid = compare(req.body.password, user.password)

          if(!valid) {
            res.status(401).json({error: 'username atau password salah'})
          } else {
            const {id, email,role} = user
            const payload = {id, email, role}
            let token = sign(payload)
            res.status(200).json(token)
          }
        }
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
        res.status(401).json(err)
      })
  }


}


module.exports = AuthController