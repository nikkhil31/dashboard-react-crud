import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        dob: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        education: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

userSchema.set('toObject', { virtuals: true })
userSchema.set('toJSON', { virtuals: true })

userSchema.virtual('educationInWord').get(function () {
    let e = ['Bsc (IT)', 'BE', 'BCA']
    return e[this.education]
})

const User = mongoose.model('User', userSchema)

export default User
