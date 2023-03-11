const express = require("express")
const router  = express.Router()
const Products  = require("../controller/products")

router.get("/addProduct",Products.addProduct)

router.get("/showProducts",Products.viewProducts)

router.post("/findProduct",Products.searchProducts)

module.exports = router

