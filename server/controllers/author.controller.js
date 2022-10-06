const Author = require('../models/author.model')

module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(error => response.json(error))
}

module.exports.getOneAuthor = (request, response) => {
    Author.findOne({ _id: request.params.id })
        .then(author => response.json(author))
        .catch(error => response.json(error))
}

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(newAuthor => response.json(newAuthor))
        .catch(error => response.json(error))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(author => response.json(author))
        .catch(error => response.json(error))
}

module.exports.deleteAuthor = (request, response) => {
    Author.findOneAndDelete({ _id: request.params.id })
        .then(confirmation => response.json(confirmation))
        .catch(error => response.json(error))
}