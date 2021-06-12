import express from 'express'
import {
    addCategory,
    addFakerCategory,
    getCategory,
    updateCategory,
    deleteCategory,
} from '../controllers/categoryController.js'
const app = express.Router()

app.route('/')
    .get(getCategory)
    .post(addCategory)
    .put(updateCategory)
    .delete(deleteCategory)

app.route('/faker').get(addFakerCategory)

export default app
