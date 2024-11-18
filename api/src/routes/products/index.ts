import {Router} from 'express'
import { createProduct,  deleteProduct,  getProductById,  listProudcts, updateProduct } from './productsController.js'
import { validateData } from '../../middleware/validationMiddleware.js'
import {z} from 'zod'

import { createProductSchema, updateProductSchema } from '../../db/productSchema.js'
import { verifySeller,verifyToken } from '../../middleware/authMiddleware.js'

const router = Router() 

router.get('/', listProudcts)
router.post('/create', verifyToken, verifySeller, validateData(createProductSchema), createProduct)
router.get("/:id", getProductById)
router.put('/:id', verifyToken, verifySeller, validateData(updateProductSchema), updateProduct)
router.delete('/:id',verifyToken,verifySeller,  deleteProduct)

export default router