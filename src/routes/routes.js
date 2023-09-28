const router= require ('express').Router()

const ProductController= require ('../controllers/products')

router.get('/products', ProductController.get)

module.exports = router