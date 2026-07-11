import express from 'express'
import getMyOrders from '../controllers/orders.controller'

const orders = express.Router()

order.get('/:_id/myorders', getMyOrders)

export default orders