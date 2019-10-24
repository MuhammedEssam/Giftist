const { Order, validate } = require("../models/orders");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await Order.find().sort("name");
  res.send(orders);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let order = new Order({
    recipientName: req.body.recipientName,
    location: req.body.location,
    recipientPhonenumber: req.body.recipientPhonenumber,
    sendingDate: req.body.sendingDate,
    gift: req.body.gift
  });
  order = await order.save();

  res.send(order);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const order = await Order.findByIdAndUpdate(
    req.params.id,
    {
      recipientName: req.body.recipientName,
      location: req.body.location,
      recipientPhonenumber: req.body.recipientPhonenumber,
      sendingDate: req.body.sendingDate,
      gift: req.body.gift
    },
    {
      new: true
    }
  );
  if (!order)
    return res.status(404).send("The order with the given ID was not found.");

  res.send(order);
});

router.delete("/:id", async (req, res) => {
  const order = await Order.findByIdAndRemove(req.params.id);

  if (!order)
    return res.status(404).send("The order with the given ID was not found.");

  res.send(order);
});

router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order)
    return res.status(404).send("The order with the given ID was not found.");

  res.send(order);
});

module.exports = router;
