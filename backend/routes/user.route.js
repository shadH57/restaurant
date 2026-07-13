import express from 'express'

const userRoute = express.Router()

userRoute.get('/all', (req,res) => {
    res.status(200).json({message: "here is all users"})
})
userRoute.get('/:_id', (req,res) => {
    res.status(200).json({message: "here is a user"})
})
userRoute.post('/add', (req,res) => {
    res.status(200).json({message: "User created!"})
})
userRoute.put('/:_id', (req,res) => {
    res.status(200).json({message: "User updated"})
})
userRoute.delete('/:_id', (req,res) => {
    res.status(200).json({message: "User Deleted"})
})

export default userRoute