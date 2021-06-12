import express from 'express'
const app = express.Router()

import userRoutes from './userRoutes.js'
import categoryRoutes from './categoryRoutes.js'
import subCategoryRoutes from './subCategoryRoutes.js'

app.use('/user', userRoutes)
app.use('/category', categoryRoutes)
app.use('/subcategory', subCategoryRoutes)

export default app
