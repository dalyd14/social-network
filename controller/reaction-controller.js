const { Thought, User } = require('../model')

const reactionController = {
    
    createReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
        .then(dbThought => {
            res.json(dbThought)
        })
        .catch(err => res.status(500).json(err))
    },

    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { _id: params.reactionId } } },
            { new: true }
        )
        .then(dbThought => {
            res.json(dbThought)
        })
        .catch(err => res.status(500).json(err))
    }

}

module.exports = reactionController