import Table from '../models/tableModel.js'

const orderFood = async (req,res) => {
    try{
        const {items, status} = req.body
        const table = await Table.findById(req.params._id)

        if(!table) {
            return res.status(404).json({message: "table not found!"})
        }
        

        if(table.isActive === false){
            return res.status(404).json({message: "This table is not available"})
        }

        let total = 0;
        items.forEach(item => {
            total += item.price * (item.quantity || 1);
        });

        table.isActive = false;
        table.orders.push({
            items,
            status: status || 'Pending'
        });
        table.closedAt = Date.now();
        table.totalAmount = total;

        const updatedTable = await table.save();

        res.status(200).json(updatedTable)
    } catch(err){
        res.status(500).json(err.message)
    }
}

const cancellingOrder = async (req,res) => {
    try{
        const table = await Table.findById(req.params._id)

        if(!table) {
            return res.status(404).json({message: "This tabel does not have any order"})
        }

        if (table.isActive === true || table.orders.length === 0) {
            return res.status(400).json({ message: "This table does not have any active orders to cancel." });
        }

        table.orders = [];
        table.isActive = true;
        table.totalAmount = 0;
        table.openedAt = Date.now()

        await table.save()

        res.status(201).json({message: "Your order Cancelled Successfuly!"})
    } catch(err) {
        res.status(500).json(err.message)
    }
}

export {orderFood, cancellingOrder}