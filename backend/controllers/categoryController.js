import asyncHandler from 'express-async-handler'
import faker from 'faker'
import Category from '../model/categoryModel.js'

const getCategory = asyncHandler(async (req, res) => {
    const categoryId = req.query.id || ''
    const categories = categoryId
        ? await Category.findById(categoryId)
        : await Category.find({})
    return res.json(categories)
})

const addCategory = asyncHandler(async (req, res) => {
    const { categoryName, shortDesc } = req.body

    const category = await Category.create({
        categoryName,
        shortDescription: shortDesc,
    })

    if (category) {
        res.status(201).json(category)
    } else {
        res.status(400)
        throw new Error('Category not found')
    }
})

const updateCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.query.id)

    if (category) {
        category.categoryName = req.body.categoryName || category.categoryName
        category.shortDescription =
            req.body.shortDesc || category.shortDescription

        const _category = await category.save()

        res.json({
            status_code: '200',
            status_message: 'success',
            category: _category,
        })
    } else {
        res.status(404)
        throw new Error('Category not found')
    }
})

const deleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.query.id)
    if (category) {
        await category.remove()
        return res.json({ message: 'Category removed' })
    } else {
        res.status(404)
        throw new Error('Category Not Found')
    }
})

const addFakerCategory = asyncHandler(async (req, res) => {
    for (let index = 1; index <= 10; index++) {
        await Category.create({
            categoryName: faker.commerce.department(),
            shortDescription: faker.lorem.lines(),
        })
    }

    return res.json('category created successfully')
})

export {
    getCategory,
    addFakerCategory,
    addCategory,
    updateCategory,
    deleteCategory,
}
