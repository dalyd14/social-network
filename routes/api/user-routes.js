const router = require('express').Router()

const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controller/user-controller')
const {
    addFriendToFriendsList,
    deleteFriendFromFriendsList
} = require('../../controller/friend-controller')

router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:userId')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

router
    .route('/:userId/friends/:friendId')
    .post(addFriendToFriendsList)
    .delete(deleteFriendFromFriendsList)

module.exports = router