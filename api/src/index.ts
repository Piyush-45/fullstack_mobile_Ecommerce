import router from "./routes/products"
import productRouter from "./routes/products/index"
import express, { json, urlencoded } from 'express'

const app = express()

app.use(urlencoded({extended:false}))
app.use(json())

const port = 3000

app.use('/products', productRouter)

app.listen(port, ()=>{
    console.log(`example app listening on port ${port} `)
})