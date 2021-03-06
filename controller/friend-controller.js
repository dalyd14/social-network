const { User } = require('../model')

const friendController = {
    addFriendToFriendsList ({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true }
        )
        .then(dbUser => {
            res.json(dbUser)
        })
        .catch(err => res.status(500).json(err))
    },

    deleteFriendFromFriendsList ({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
        .then(dbUser => {
            res.json(dbUser)
        })
        .catch(err => res.status(500).json(err))
    }
}

module.exports = friendController