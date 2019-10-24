const Joi = require("joi");
const mongoose = require("mongoose");
var ObjectId1 = mongoose.Schema.Types.ObjectId;
var ObjectId2 = mongoose.Schema.Types.ObjectId;

const assignorderschema = new mongoose.Schema({
  order: {
    type: ObjectId1,
    ref: "orders",
    required: true
  },
  driver: {
    type: ObjectId2,
    ref: "drivers",
    required: true
  },
  orderstate: {
    type: String,
    required: true
  }
});

const Assignorder = mongoose.model("Assignorder", assignorderschema);

function validateAssignorder(Assignorder) {
  const schema = {
    order: Joi.required(),
    driver: Joi.required(),
    orderstate: Joi.string().required()
  };

  return Joi.validate(Assignorder, schema);
}

exports.assignorderschema = assignorderschema;
exports.Assignorder = Assignorder;
exports.validate = validateAssignorder;
