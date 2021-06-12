import express from 'express'
import {
    addSubCategory,
    addFakerSubCategory,
    getSubCategory,
    updateSubCategory,
    deleteSubCategory,
} from '../controllers/subCategoryController.js'
const app = express.Router()

app.route('/')
    .get(getSubCategory)
    .post(addSubCategory)
    .put(updateSubCategory)
    .delete(deleteSubCategory)

app.route('/faker').get(addFakerSubCategory)

export default app
