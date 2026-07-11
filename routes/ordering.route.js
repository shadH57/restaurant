import express from 'express'
import { orderFood, cancellingOrder } from '../controllers/ordering.controller.js';

const orderingRoute = express.Router()

orderingRoute.put('/:_id/order', orderFood);
orderingRoute.delete('/delete/:_id', cancellingOrder)

export default orderingRoute