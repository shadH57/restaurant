import Table from '../models/tableModel.js'

const getAllTables = async (req,res) => {
    try{
        const tables = await Table.find({})

        if(tables === 0){
            return res.status(200).json({message: "You dont have any tables!"})
        }

        res.status(200).json(tables)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}

const getTable = async (req,res) => {
    try{
        const table = await Table.findById(req.params._id)

        if(!table){
            return res.status(404).json({message: "Table not found!"})
        }

        res.status(200).json(table)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}

const createTable = async (req,res) => {
    try{
        const tableNumber = req.body;
        
        const newTable = new Table({
            tableNumber,
            isActive: false,
            order: []
        })

        await newTable.save()

        res.status(201).json({
            message: `Table ${tableNumber} has benn created and ready for Service!`
        })
    } catch(err) {
        if(err.code === 11000) {
            return res.status(400).json({
                message: "Table Number is already in use! please change table number when you create one!"
            })
        }

        res.status(500).json({message: err.message})
    }
}

const updateTable = async (req,res) => {
    try{
        const table = await Table.findById(req.params._id);
        const { tableNumber, order } = req.body;

        if(!table){
            return res.status(404).json({message: "Table not found!"})
        }

        if (tableNumber) table.tableNumber = tableNumber;
        if(order) table.order = order;

        await table.save()

        res.status(200).json({message: "Tabel successfuly updated"})        
    } catch(err) {
        if (err.code === 11000) {
            return res.status(400).json({ message: "That table number is already reserved!" });
        }
        res.status(500).json({message: err.message})
    }

}

const deleteTable = async (req,res) => {
    try{
        const table = await Table.findById(req.params._id)

        if(!table){
            return res.status(404).json({message: "Table not found!"})
        }

        const deletedTable = await Table.findByIdAndDelete(req.params._id)

        res.status(200).json(deleteTable)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}

export {getAllTables, getTable, createTable, updateTable, deleteTable}