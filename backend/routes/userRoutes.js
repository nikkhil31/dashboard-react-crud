import express from 'express'
import { addUsers, getUsers } from '../controllers/userController.js'
const app = express.Router()

app.route('/').get(getUsers).post(addUsers)

export default app
