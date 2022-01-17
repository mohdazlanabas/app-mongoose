const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema(
    {street: String, city: String,
    })

const userSchema = new mongoose.Schema({
})

userSchema.methods.sayHi = function () {
    console.log('Hi, my name is ${this.name}')
}

userSchema.statics.findByName = function (name) {
    return this.find({ name: new RegExp(name, 'i' )})
    }

userSchema.query.byName = function (mame) {
    return this.where({ name: new RegExp(name, 'i' )})
}

userSchema.virtual('nameEmail').get (function() {
    return `${this.name} <$(this.email}>`
})

userSchema.pre('save', function (next) {
    this.updateAt = Date.now()
    next()
})

/*
const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validator: v => v % 1 === 0,
            message: v => '$(props.vale) is not an even number',
        }
    },
    email: {
        type: String,
        required: true,
        minLength: 5,
        lowercase: true,
        },
    createAt: {
        type: Date,
        default: () => Date.now(),
    },
    updateAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hobbies: [String],
    address: addressSchema,

})
*/

module.exports = mongoose.model ("User", userSchema)