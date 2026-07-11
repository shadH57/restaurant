import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
    {
        tableNumber: {
            type: Number,
            required: true,
        },
        items: [{
            name: String,
            quantity: Number,
            price: Number,
            note: String,
        }],
        status: {
            type: String,
            enum: ['Pending', 'Preparing', 'Served', 'Cancelled'],
            default: 'Pending'
        }
    }
)

const Order = mongoose.model('Order', orderSchema);

module.exports = Order