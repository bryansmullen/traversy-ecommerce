const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/db.js')
const productRoutes = require('./routes/productRoutes.js')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config()

connectDb().then()

const app = express()

app.use('/api/products', productRoutes)

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT} in ${process.env.NODE_ENV} mode`
    )
})
