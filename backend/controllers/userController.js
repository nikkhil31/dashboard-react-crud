import asyncHandler from 'express-async-handler'
import faker from 'faker'
import User from '../model/userModel.js'

const getUsers = asyncHandler(async (req, res) => {
    const userId = req.query.id || ''
    const users = userId ? await User.findById(userId) : await User.find({})
    return res.json(users)
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

const updateUsers = asyncHandler(async (req, res) => {
    const user = await User.findById(req.query.id)

    if (user) {
        user.firstName = req.body.firstName || user.firstName
        user.lastName = req.body.lastName || user.lastName
        user.dob = req.body.dob || user.dob
        user.phone = req.body.phone || user.phone
        user.education = req.body.education || user.education
        user.address = req.body.address || user.address
        user.email = req.body.email || user.email

        await user.save()

        res.json({
            status_code: '200',
            status_code: 'success',
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

const deleteUser = asyncHandler(async (req, res) => {
    const users = await User.findById(req.query.id)
    if (users) {
        await users.remove()
        return res.json({ message: 'User removed' })
    } else {
        res.status(404)
        throw new Error('User Not Found')
    }
})

const addFakerUsers = asyncHandler(async (req, res) => {
    for (let index = 1; index <= 10; index++) {
        const user = await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            dob: faker.date.past(),
            phone: faker.phone.phoneNumber('91##########'),
            education: faker.datatype.number(2).toString(),
            address:
                faker.address.streetAddress() +
                ',' +
                faker.address.city() +
                ',' +
                faker.address.state() +
                ',' +
                faker.address.country(),
        })
    }

    return res.json('users created successfully')
})

export { getUsers, addUsers, updateUsers, deleteUser, addFakerUsers }
