import {Router} from 'express'
import { createProduct,  deleteProduct,  getProductById,  listProudcts, updateProduct } from './productsController'
const router = Router()

router.get('/', listProudcts)
router.post('/create', createProduct)
router.get("/:id", getProductById)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router