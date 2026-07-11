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
        orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order'}],
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