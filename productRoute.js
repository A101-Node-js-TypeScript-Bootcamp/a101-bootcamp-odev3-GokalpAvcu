const express = require("express");
const router = express.Router();
const productController=require('../../controllers/productController')

router.post("/", productController.add);
router.get("/", productController.fetchAll);
router.get("/discount", productController.discountFetch);
router.get("/:id", productController.singleFetch);
router.put("/", productController.put);
router.delete("/", productController.delete);

module.exports = router;