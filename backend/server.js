import express from 'express'
import colors from 'colors'
import morgan from 'morgan'

import indexRoutes from './routes/indexRoutes.js'
import connectDB from './config/db.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

const app = express()

const PORT = process.env.PORT || 5000

process.env.NODE_ENV !== 'production' && app.use(morgan('dev'))

connectDB()

app.use(express.json())

app.use('/api', indexRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    )
)
