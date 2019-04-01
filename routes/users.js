const routes = require('express').Router()
const UserController = require('../controllers/userController')
const AuthController = require('../controllers/authController')
const authentication = require('../middleware/authenticate')
const authorization = require('../middleware/authorize')
const userAthorization = require('../middleware/userAuthenticated')

//SIGN IN and SIGN UP API
routes.post('/signup', AuthController.createUser )
routes.post('/signin', AuthController.signIn)


//USER API
routes.get('/users/', authentication, authorization, UserController.findAllUser)
routes.get('/users/:id',authentication, userAthorization, UserController.findOneUser)
routes.post('/users/', authentication, authorization,UserController.createUser)
routes.delete('/users/:id',authentication, authorization, UserController.remove)
routes.put('/users/:id',authentication, userAthorization, UserController.editUser)







module.exports = routes