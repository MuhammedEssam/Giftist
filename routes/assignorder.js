const { Assignorder, validate } = require("../models/assignorder");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const assignorder = await Assignorder.find().sort("name");
  res.send(assignorder);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let assignorder = new Assignorder({
    order: req.body.order,
    driver: req.body.driver,
    orderstate: req.body.orderstate
  });
  assignorder = await assignorder.save();

  res.send(assignorder);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const assignorder = await Assignorder.findByIdAndUpdate(
    req.params.id,
    {
      orderstate: req.body.orderstate
    },
    {
      new: true
    }
  );
  if (!assignorder)
    return res
      .status(404)
      .send("The assignorder with the given ID was not found.");

  res.send(assignorder);
});

router.delete("/:id", async (req, res) => {
  const assignorder = await Assignorder.findByIdAndRemove(req.params.id);

  if (!assignorder)
    return res
      .status(404)
      .send("The assignorder with the given ID was not found.");

  res.send(assignorder);
});

router.get("/:id", async (req, res) => {
  const assignorder = await Assignorder.findById(req.params.id);

  if (!assignorder)
    return res
      .status(404)
      .send("The assignorder with the given ID was not found.");

  res.send(assignorder);
});

module.exports = router;
