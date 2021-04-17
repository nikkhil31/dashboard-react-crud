import asyncHandler from 'express-async-handler'
import User from '../model/userModel.js'

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

const addUsers = asyncHandler(async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        dob,
        phone,
        education,
        address,
    } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        dob,
        phone,
        education,
        address,
    })

    if (user) {
        res.status(201).json(user)
    } else {
        res.status(400)
        throw new Error('User not found')
    }
})

export { getUsers, addUsers }
