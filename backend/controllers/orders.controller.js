import Table from '../models/tableSchema.js'

const getMyOrders = async (req,res) => {
    try{
        const table = await Table.findById(req.params._id).populate('orders');

    if(!table){
        return res.status(404).json('Table not found')
    }

    res.status(200).json({
        orders: table.orders,
        totalAmount: table.totalAmount
    })
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}

export default getMyOrders;