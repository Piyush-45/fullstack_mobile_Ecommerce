import {Router} from 'express'
import { createProduct,  deleteProduct,  getProductById,  listProudcts, updateProduct } from './productsController'
import { validateData } from '../../middleware/validationMiddleware'
import {z} from 'zod'

import { createProductSchema, updateProductSchema } from '../../db/productSchema'

const router = Router() 

router.get('/', listProudcts)
router.post('/create', validateData(createProductSchema), createProduct)
router.get("/:id", getProductById)
router.put('/:id', validateData(updateProductSchema), updateProduct)
router.delete('/:id', deleteProduct)

export default router