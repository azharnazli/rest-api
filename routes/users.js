const routes = require('express').Router()
const UserController = require('../controllers/userController')

routes.get('/users/', UserController.findAllUser)
routes.get('/users/:id', UserController.findOneUser)
routes.post('/users/', UserController.createUser)
routes.delete('/users/:id', UserController.remove)
routes.put('/users/:id', UserController.editUser)







module.exports = routes