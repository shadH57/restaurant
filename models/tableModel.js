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
        order: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order'}],
        openedAt: {
            type: Date,
            default: Date.now
        },
        closedAt: Date,
        totalAmount: Number,
    }
)

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;