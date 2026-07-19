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
        orders: {
            type: [
                {
                    name: {
                        type: String,
                        required: true
                    },
                    price: {
                        type: Number,
                        required: true,
                        min: 0
                    },
                    quantity: {
                        type: Number,
                        required: true,
                        min: 1
                    },
                    note: String,
                }
            ],
            default: []
        },
        status: {
            type: String,
            enum: ['Pending', 'Preparing', 'Served', 'Cancelled'],
            default: 'Pending'
        },
        totalAmount: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
)

const Table = mongoose.model('Table', tableSchema);

export default Table