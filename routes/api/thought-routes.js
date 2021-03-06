const router = require('express').Router()

const {
    getAllThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controller/thought-controller')
const {
    createReaction,
    deleteReaction
} = require('../../controller/reaction-controller')

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

router
    .route('/:thoughtId')
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(createReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router