import express from 'express'
const app = express.Router()

app.route('/').get()

export default app
