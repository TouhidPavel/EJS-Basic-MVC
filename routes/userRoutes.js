import express from 'express'
import * as userController from '../controllers/userController.js'

const publicRouter = express.Router()

publicRouter.get('/user', userController.getUser)
publicRouter.post('/user', userController.saveUser)

export default publicRouter