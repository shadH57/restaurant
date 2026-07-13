import mongoose from 'mongoose';

const tableSchema = new mongoose.Schema(
    {
        tableNumber: {
            type: Number,
            required: true,
            unique: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        orders: [{items: [{
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
        }}],
        openedAt: {
            type: Date,
            default: Date.now
        },
        closedAt: Date,
        totalAmount: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
)

const Table = mongoose.model('Table', tableSchema);

export default Table