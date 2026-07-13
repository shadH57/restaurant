import express from 'express'
import getMyOrders from '../controllers/orders.controller.js'

const orders = express.Router()

orders.get('/:_id', getMyOrders)

export default orders