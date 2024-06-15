const express = require("express");
const router = express.Router();
const Data = require("../models/Data");

router.get("/", async (req, res) => {
  const { date } = req.query;
  let filter = {};
  if (date) {
    filter.timestamp = {
      $gte: new Date(date),
      $lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1)),
    };
  }
  const data = await Data.find(filter);
  res.json(data);
});
router.get("/all", async (req, res) => {
  const data = await Data.find();
  res.json(data);
});

module.exports = router;
