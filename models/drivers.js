const Joi = require("joi");
const mongoose = require("mongoose");

const dreiverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 255,
    unique: true
  },

  phonenumber: {
    type: String,
    required: true
  },
  SSN: {
    //stands for social security number
    type: Number,
    required: true,
    minlength: 14,
    maxlength: 255
  }
});

const Driver = mongoose.model("Drivers", dreiverSchema);

function validateDriver(driver) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),

    phonenumber: Joi.required(),
    SSN: Joi.number()
    .required()
  };

  return Joi.validate(driver, schema);
}

exports.Driver = Driver;
exports.validate = validateDriver;
