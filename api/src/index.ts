
import express, { json, urlencoded } from 'express'

import productRouter from "./routes/products/index.js"
import authRoutes from "./routes/auth/index.js"
const app = express()

app.use(urlencoded({extended:false}))
app.use(json())

const port = 3000

app.use('/products', productRouter)
app.use('/auth', authRoutes)
app.listen(port, ()=>{
    console.log(`example app listening on port ${port} `)
})