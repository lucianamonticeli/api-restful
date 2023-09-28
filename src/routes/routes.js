const router= require ('express').Router()

const ProductController= require ('../controllers/products')

router.get('/products/:id?', ProductController.get)

module.exports = router