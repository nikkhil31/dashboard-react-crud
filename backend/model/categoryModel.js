import mongoose from 'mongoose'
import random from 'mongoose-simple-random'

const categorySchema = mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: true,
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

categorySchema.plugin(random)

const Category = mongoose.model('Category', categorySchema)

export default Category
