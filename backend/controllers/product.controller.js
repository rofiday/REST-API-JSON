const products = require("../assets/jsons/product.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  createDataProduct: (req, res) => {
    try {
      const { name, price, stock } = req.body;
      const productFS = JSON.parse(
        fs.readFileSync("assets/jsons/product.json")
      );
      const newProduct = { id: uuidv4(), name, price, stock };
      productFS.products.push(newProduct);
      fs.writeFileSync("assets/jsons/product.json", JSON.stringify(productFS));
      res.status(200).json({
        status: "success",
        data: productFS,
        message: "DATA BERHASIL DITAMBAHKAN",
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  getAllDataProduct: (req, res) => {
    try {
      const allProduct = JSON.parse(
        fs.readFileSync("assets/jsons/product.json")
      );
      res.status(200).send(allProduct);
      console.log(allProduct);
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  getDataProductById: (req, res) => {
    try {
      const { id } = req.params;
      const product = products.products.find((product) => product.id === id);
      res.status(200).send(product);
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  updateDataProduct: (req, res) => {
    try {
      const { id } = req.params;
      const { name, price, stock } = req.body;
      const product = products.products.find((product) => product.id === id);
      product.name = name;
      product.price = price;
      product.stock = stock;
      fs.writeFileSync("assets/jsons/product.json", JSON.stringify(products));
      res.status(200).send(products);
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  deleteDataProduct: (req, res) => {
    try {
      const { id } = req.params;
      let indexTarget = null;
      products.products.forEach((product, index) => {
        if (product.id === id) {
          indexTarget = index;
        }
      });
      if (indexTarget === undefined || indexTarget === null) {
        res.status(404).send("Product Not Found");
      }
      products.products.find((product) => product.id === id);
      products.products.splice(indexTarget, 1);
      fs.writeFileSync("assets/jsons/product.json", JSON.stringify(products));
      res.status(200).json({
        status: "success",
        message: "DATA BERHASIL DI DELETE",
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
};
