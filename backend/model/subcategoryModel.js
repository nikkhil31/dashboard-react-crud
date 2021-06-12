import mongoose from 'mongoose'

const subcategorySchema = mongoose.Schema(
    {
        subCategoryName: {
            type: String,
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Category',
        },
        shortDescription: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const subCategory = mongoose.model('subCategory', subcategorySchema)

export default subCategory
