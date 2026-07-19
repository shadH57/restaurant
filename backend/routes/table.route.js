import express from "express";
import {
    getAllTables,
    getTable,
    addTable,
    updateTable,
    deleteTable
} from "../controllers/table.controller.js"

const table = express.Router()

table.get('/getAllTables', getAllTables)
table.get('/:_id', getTable)
table.post('/addTable', addTable)
table.put('/:_id', updateTable)
table.delete('/:_id', deleteTable)

export default table
