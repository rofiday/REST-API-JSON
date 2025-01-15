const express = require("express");
const {
  createDataProduct,
  getAllDataProduct,
  getDataProductById,
  updateDataProduct,
  deleteDataProduct,
} = require("../controllers/product.controller");
const {
  middlewareCreateProduct,
  middlewareGetAllData,
  middlewareGetDataById,
  middlewareUpdateProduct,
  middlewareDeleteProduct,
} = require("../middlewares/product.middleware");
const router = express.Router();

router.post("/", middlewareCreateProduct, createDataProduct);
router.get("/", middlewareGetAllData, getAllDataProduct);
router.get("/:id", middlewareGetDataById, getDataProductById);
router.put("/:id", middlewareUpdateProduct, updateDataProduct);
router.delete("/:id", middlewareDeleteProduct, deleteDataProduct);

module.exports = router;
