import express from 'express'
import dotenv from 'dotenv'

import connectDB from './config/db.js'
import userRoute from './routes/user.route.js'
import customerRoute from './routes/customer.route.js'
import orderRoute from './routes/order.route.js'
import tableRoute from './routes/table.route.js'
import menuRoute from './routes/menu.route.js'


dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('api/user', userRoute)
app.use('/api/customer', customerRoute)
app.use('/api/order', orderRoute)
app.use('/api/tables', tableRoute)
app.use('/api/menu', menuRoute)


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port: ${port}`);
    })
})

