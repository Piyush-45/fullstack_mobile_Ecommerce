export const getData = (req:Request,res:Response)=>{
    // res.send("products list")
}

export const createProduct =(req:Request,res:Response)=>{
    console.log(req.body)
    // res.send("product created successfully")
    
}

export const updateProduct=(req:Request,res:Response)=>{
    // res.send(`product updated ${req.params.id }`)
    // console.log(req)
}