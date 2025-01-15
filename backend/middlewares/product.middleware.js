const Joi = require("joi");
const products = require("../assets/jsons/product.json");
module.exports = {
  middlewareGetAllData: (req, res, next) => {
    try {
      if (!products) {
        return res.status(404).send("Data Not Found");
      }
      next();
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  middlewareGetDataById: (req, res, next) => {
    try {
      const { id } = req.params;
      const product = products.products.find((product) => product.id === id);
      if (!product) {
        res.status(404).send("Product Not Found");
      }
      res.status(200).send(product);
      next();
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  middlewareCreateProduct: (req, res, next) => {
    try {
      const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required().strict(),
        stock: Joi.number().required().strict(),
      });
      const validationError = schema.validate(req.body).error;
      if (validationError) {
        return res.status(400).send(validationError.details[0].message);
      }
      next();
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  middlewareUpdateProduct: (req, res, next) => {
    try {
      const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required().strict(),
        stock: Joi.number().required().strict(),
      });
      const validationError = schema.validate(req.body).error;
      if (validationError) {
        return res.status(400).send(validationError.details[0].message);
      }
      next();
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
  middlewareDeleteProduct: (req, res, next) => {
    try {
      const schema = Joi.object({
        id: Joi.string().required(),
      });
      const validationError = schema.validate(req.params).error;
      if (validationError) {
        return res.status(400).send(validationError.details[0].message);
      }
      next();
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  },
};
