import bcrypt from 'bcryptjs'
import User from '../models/userSchema.js'

const signUp = async (req,res) => {
    try{
        const { userName, password } = req.body

        if(!userName || !password){
            return res.status(404).json({message: "Please fill in Username and Password!"})
        }

        if(password.length < 8){
            return res.status(404).json({message: "Password must be 8 charactor or more!"})
        }

        const userExists = await User.findOne({userName})

        if(userExists){
            return res.status(404).json({message: "User already taken!"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            userName,
            password: hashedPassword,
        })

        await newUser.save()

        res.status(201).json(newUser)
    } catch(err) {
        res.status(500).json(err.message)
    }
}

const logIn = async (req,res) => {
    try {
        const { userName, password } = req.body

        if(!userName || !password){
            return res.status(404).json({message: "Please fill in Username and Password!"})
        }

        const user = await User.findOne({userName})

        if(!user){
            return res.status(404).json({message: "User not found!"})
        }

        const passwordIsCorrect = await bcrypt.compare(password, user.password)

        if(!passwordIsCorrect){
            return res.status(404).json({message: "Invalid username or password"})
        }

        res.status(200).json(user)
    } catch(err) {
        res.status(500).json(err.message)
    }
}

const updateUser = async (req,res) => {
    try{
        const {userName, password} = req.body
        const user = await User.findById(req.params._id)

        if(!user){
            return res.status(404).json({message: "User not found!"})
        }

        if(password.length < 8){
            return res.status(404).json({message: "Password must be 8 charactor or more!"})
        }

        const userNameTaken = await User.findOne({ userName, _id: { $ne: user._id } })

        if(userNameTaken){
            return res.status(404).json({ message: "Username already taken!" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        user.userName = userName
        user.password = hashedPassword

        await user.save()

        res.status(200).json({user, message: "User Updated!"})
    } catch (err) {
        res.status(500).json(err.message)
    }
}

const deleteUser = async (req,res) => {
    try{
        const user = await User.findById(req.params._id);

        if(!user){
            return res.status(404).json({message: "User not found!"})
        }

        const deletedUser = await User.findByIdAndDelete(req.params._id)

        res.status(200).json({message: "User Deleted!"})
    } catch(err) {
        res.status(500).json(err.message)
    }
}

export {signUp, logIn, updateUser, deleteUser}