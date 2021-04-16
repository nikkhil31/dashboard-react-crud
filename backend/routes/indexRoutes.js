import express from 'express'
const app = express.Router()

import userRoutes from './userRoutes.js'

app.use('/user',userRoutes)

export default app
