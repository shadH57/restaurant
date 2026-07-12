import express from 'express'
import getMyOrders from '../controllers/orders.controller.js'

const orders = express.Router()

orders.get('/:_id/myorders', getMyOrders)

export default orders