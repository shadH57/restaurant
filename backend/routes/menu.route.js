import express from 'express';
import {
    getItem,
    getAllItems,
    addItem,
    updateItem,
    deleteItem
} from "../controllers/menu.controller.js"

const menuRoute = express.Router()

menuRoute.get("/all", getAllItems)
menuRoute.get('/:_id', getItem)
menuRoute.post("/add", addItem)
menuRoute.put('/:_id', updateItem)
menuRoute.delete('/:_id', deleteItem)

export default menuRoute