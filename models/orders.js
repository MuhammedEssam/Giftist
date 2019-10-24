const Joi = require("joi");
const mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;
const orderschema = new mongoose.Schema({
  recipientName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  location: {
    type: String,
    required: true,
    minlength: 00,
    maxlength: 255
  },
  recipientPhonenumber: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  sendingDate: {
    type: Date,
    required: true
  },
  gift: {
    type: ObjectId,
    ref: "products"
  }
});

const Order = mongoose.model("Odrer", orderschema);

function validateorder(Order) {
  const schema = {
    recipientName: Joi.string()
      .min(3)
      .required(),
    location: Joi.string()
      .min(10)
      .max(255)
      .required(),
    recipientPhonenumber: Joi.required(),
    gift: Joi.required(),
    sendingDate: Joi.date()
  };

  return Joi.validate(Order, schema);
}

exports.orderschema = orderschema;
exports.Order = Order;
exports.validate = validateorder;
