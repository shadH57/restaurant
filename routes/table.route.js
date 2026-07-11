import express from "express";
import {
    getAllTables,
    getTable,
    createTable,
    updateTable,
    deleteTable
} from "../controllers/table.controller.js"

const table = express.Router()

table.get('/getAllTables', getAllTables)
table.get('/:_id', getTable)
table.post('/create', createTable)
table.put('/:_id/update', updateTable)
table.delete('/:_id/delete', deleteTable)

export default table
