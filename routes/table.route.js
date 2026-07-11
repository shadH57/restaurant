import express from "express";

const table = express.Router()

table.get('/getAllTables', /* get all tables */)
table.get('/:_id', /*get a spesific table */)
table.post('/create', /* create table */)
table.put('/:_id/update', /* update tables */)
table.delete('/:_id/delete', /* delete tables */)

export default table
