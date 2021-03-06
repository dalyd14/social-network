const { Thought, User } = require('../model')

const thoughtController = {

    getAllThoughts (req, res) {
        Thought.find()
        .then(dbThought => {
            res.json(dbThought)
        })
        .catch(err => res.status(500).json(err))
    },

    getThought ({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
        .then(dbThought => {
            res.json(dbThought)
        })
        .catch(err => res.status(500).json(err))
    },

    createThought({ body }, res) {
        Thought.create(body)
        .then(dbThought => {
            User.findOneAndUpdate(
                { username: dbThought.username },
                { $push: { thoughts: dbThought._id } }
            ).then(dbUser => {
                res.json(dbThought)
            })
        })
        .catch(err => res.status(500).json(err))
    },

    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            body,
            { new: true }
        )
        .then(dbThought => {
            res.json(dbThought)
        })
        .catch(err => res.status(500).json(err))
    },

    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
        .then(dbThought => {
            res.json(dbThought)
        })
        .catch(err => res.status(500).json(err))
    }

}

module.exports = thoughtController