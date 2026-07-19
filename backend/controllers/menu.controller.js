import Item from "../models/itemSchema.js"

const getItem = async (req,res) => {
    try {
        const item = await Item.findById(req.params._id)

        if(!item){
            return res.status(404).json({ message: "item not found!" })
        }

        res.status(200).json(item)
    } catch(err) {
        res.status(500).json(err.message)
    }
}

const getAllItems = async (req,res) => {
    try {
        const items = await Item.find({})

        if(!items){
            return res.status(404).json({message: "No item found in the menu"})
        }

        res.status(200).json(items)
    } catch(err) {
        res.status(500).json(err.message)
    }
}

const addItem = async (req,res) => {
    try{
        const {name, price} = req.body;

        if(!name || !price){
            return res.status(404).json({message: "You didn't add name or pirce!"})
        }
        
        const newItem = new Item({
            name,
            price,
        })

        await newItem.save()

        res.status(201).json(newItem)
    } catch(err) {
        res.status(500).json(err.message)
    }
}

const updateItem = async (req,res) => {
    try{
        const item = await Item.findById(req.params._id)
        const { name, price } = req.body

        if(!item){
            return res.status(404).json({message: "item not found!"})
        }

        if(name) item.name = name
        if(price) item.price = price

        await item.save()

        res.status(200).json(item)        
    } catch(err) {
        res.status(500).json(err.message)
    }
}

const deleteItem = async (req,res) => {
    try{
        const item = await Item.findById(req.params._id)

        if(!item){
            return res.status(404).json({message: "item not found!"})
        }

        const deletedItem = await Item.findByIdAndDelete(req.params._id)

        res.status(200).json({message: "Item deleted!"})
    } catch(err) {
        res.status(500).json(err.message)
    }
}

export { getItem, getAllItems, addItem, updateItem, deleteItem }