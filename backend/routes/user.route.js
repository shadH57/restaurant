import express from 'express'
import {
    signUp,
    logIn,
    updateUser,
    deleteUser
} from '../controllers/user.controller.js'

const userRoute = express.Router()

// login uses request body; use POST instead of GET
userRoute.post('/login', logIn)
userRoute.post('/signup', signUp)
userRoute.put('/:_id', updateUser)
userRoute.delete('/:_id', deleteUser)

export default userRoute