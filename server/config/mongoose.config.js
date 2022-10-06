const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/author-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(err => {
        console.log('Failed to connect to MongoDB.')
        console.error(err)
    })