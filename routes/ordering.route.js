import express from 'express'
import { orderFood, cancellingOrder } from '../controllers/ordering.controller.js';

const orderingRoute = express.Router()

orderingRoute.put('/order/:_id', orderFood);
orderingRoute.delete('/cancellorder/:_id', cancellingOrder)

export default orderingRoute