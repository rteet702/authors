const mongoose = require('mongoose')

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Author Name is required.'],
        minLength: [3, 'Author Name must be at least 3 characters.'],
        trim: true
    }
},
    { timeStamps: true }
)
module.exports = mongoose.model('Author', AuthorSchema)