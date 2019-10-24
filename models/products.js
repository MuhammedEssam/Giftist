const Joi = require("joi");
const mongoose = require("mongoose");

const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255
    },
    numberInStock: {
      type: Number,
      required: true,
      min: 0,
      max: 255
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      max: 1024
    },
    rate: {
      type: Number,
      min: 0,
      max: 50
    }
  })
);

function validateProducts(product) {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(50)
      .required(),
    numberInStock: Joi.number()
      .min(0)
      .required(),
    price: Joi.number()
      .min(0)
      .required(),
    rate: Joi.number()
      .min(0)
      .max(50)
  };

  return Joi.validate(product, schema);
}

exports.Product = Product;
exports.validate = validateProducts;
