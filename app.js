import express from 'express'
import dotenv from 'dotenv'

import connectDB from './config/db.js'
import orderingRoute from './routes/ordering.route.js'
import ordersRoute from './routes/orders.route.js'
import tableRoute from './routes/table.route.js'


dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/api/customer', orderingRoute)
app.use('/api/order', ordersRoute)
app.use('/api/tables', tableRoute)


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port: ${port}`);
    })
})

