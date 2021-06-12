import asyncHandler from 'express-async-handler'
import faker from 'faker'
import Category from '../model/categoryModel.js'
import subCategory from '../model/subcategoryModel.js'

const getSubCategory = asyncHandler(async (req, res) => {
    const subcategoryId = req.query.id || ''
    const subcategories = subcategoryId
        ? await subCategory.findById(subcategoryId)
        : await subCategory.find({})
    return res.json(subcategories)
})

const addSubCategory = asyncHandler(async (req, res) => {
    const subcategory = await subCategory.create(req.body)

    if (subcategory) {
        res.status(201).json(subcategory)
    } else {
        res.status(400)
        throw new Error('subcategory not found')
    }
})

const updateSubCategory = asyncHandler(async (req, res) => {
    const subcategory = await subCategory.findById(req.query.id)

    if (subcategory) {
        subcategory.categoryName =
            req.body.subCategoryName || subcategory.subCategoryName
        subcategory.category = req.body.category || subcategory.category
        subcategory.shortDescription =
            req.body.shortDescription || subcategory.shortDescription

        const _subcategory = await subcategory.save()

        res.json({
            status_code: '200',
            status_message: 'success',
            category: _subcategory,
        })
    } else {
        res.status(404)
        throw new Error('Subcategory not found')
    }
})

const deleteSubCategory = asyncHandler(async (req, res) => {
    const subcategory = await subCategory.findById(req.query.id)
    if (subcategory) {
        await subCategory.remove()
        return res.json({ message: 'subcategory removed' })
    } else {
        res.status(404)
        throw new Error('subcategory Not Found')
    }
})

const addFakerSubCategory = asyncHandler(async (req, res) => {
    await Category.findOneRandom(async function (err, result) {
        if (!err) {
            const subcategory = await subCategory.create({
                subCategoryName: faker.commerce.department(),
                category: result._id,
                shortDescription: faker.lorem.lines(),
            })
            return res.json(subcategory)
        }
    })
})

export {
    getSubCategory,
    addSubCategory,
    updateSubCategory,
    deleteSubCategory,
    addFakerSubCategory,
}
