const express = require("express");
const {
    getAllProducts,
    getProductByIdController,
    updateProduct,
    deleteProduct,
    createProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductByIdController);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
