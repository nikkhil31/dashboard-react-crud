import express from 'express'
import {
    addUsers,
    deleteUser,
    getUsers,
    updateUsers,
    addFakerUsers,
} from '../controllers/userController.js'
const app = express.Router()

app.route('/').get(getUsers).post(addUsers).put(updateUsers).delete(deleteUser)
app.route('/faker/user').get(addFakerUsers)

export default app
