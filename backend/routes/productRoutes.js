const express = require('express')
const ProductModel = require('../models/productModel')
const asyncHandler = require('express-async-handler')

const router = express.Router()

/**
 * @desc Fetch single product
 * @route GET /api/products/:id
 * @access Public
 */
router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const product = await ProductModel.findById(req.params.id)

        if (product) {
            res.json(product)
        } else {
            res.status(404)
            throw new Error('Product not found')
        }
    })
)

/**
 * @desc Fetch all products
 * @route GET /api/products
 * @access Public
 */
router.get(
    '/',
    asyncHandler(async (req, res) => {
        const products = await ProductModel.find({})
        res.json(products)
    })
)

module.exports = router
