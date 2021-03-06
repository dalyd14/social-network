const { User } = require('../model')

const userController = {
    getAllUsers (req, res) {
        User.find()
        .then(dbUser => {
            res.json(dbUser)
        })
        .catch(err => res.status(500).json(err))
    },

    getUser ({ params }, res) {
        User.findOne({ _id: params.userId })
        .then(dbUser => {
            res.json(dbUser)
        })
        .catch(err => res.status(500).json(err))
    },

    createUser ({ body }, res) {
        User.create(body)
        .then(dbUser => {
            res.json(dbUser)
        })
        .catch(err => res.status(500).json(err))
    },

    updateUser ({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            body,
            { new: true }
        )
        .then(dbUser => {
            res.json(dbUser)
        })
        .catch(err => res.status(500).json(err))
    },

    deleteUser ({ params }, res) {
        // delete thoughts as well
        User.findOneAndDelete({ _id: params.userId })
        .then(dbUser => {
            res.json(dbUser)
        })
        .catch(err => res.status(500).json(err))
    }
}

module.exports = userController