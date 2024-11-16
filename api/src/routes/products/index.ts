import {Router} from 'express'
import { createProduct, getData, updateProduct } from './productsController'
const router = Router()

router.get('/', getData)
router.post('/create', createProduct)
router.put('/:id', updateProduct)


export default router