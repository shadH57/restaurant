import express from 'express'
import { orderFood, cancellingOrder } from '../controllers/customer.controller.js';

const customerRoute = express.Router()

customerRoute.put('/order/:_id', orderFood);
customerRoute.delete('/cancellorder/:_id', cancellingOrder)

export default customerRoute