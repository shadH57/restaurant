import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
    {
        tableNumber: {
            type: Number,
            required: true,
        },
        items: [{
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            price: {
                type: Number,
                required: true
            },
            note: String,
        }],
        status: {
            type: String,
            enum: ['Pending', 'Preparing', 'Served', 'Cancelled'],
            default: 'Pending'
        }
    },
    { timestamps: true}
)

const Order = mongoose.model('Order', orderSchema);

export default Order