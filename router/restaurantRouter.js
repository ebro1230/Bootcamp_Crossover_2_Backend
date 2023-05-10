const express = require("express");
const router = express.Router();
require("dotenv").config();
const Restaurant = require("../models/newRestaurant");

router.post("/makeRestaurant", (req, res) => {
  const {
    name,
    street,
    city,
    zip,
    state,
    country,
    phone,
    logo,
    email,
    open,
    close,
    delivery,
    menu,
    price,
    tags,
    pics,
  } = req.body;

  Restaurant.create({
    name,
    street,
    city,
    zip,
    state,
    country,
    phone,
    logo,
    email,
    open,
    close,
    delivery,
    menu,
    price,
    tags,
    pics,
  })
    .then((data) => res.status(200).json(data))
    .catch((e) => console.log(e.message));
});

// DELETE Create an endpoint that DELETES an existing local artist in artist collection
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Restaurant.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        // Send 404 if no artist is found with the specified _id
        return res.sendStatus(404);
      }
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err.message);
      res.sendStatus(500);
    });
});

router.get("/", (req, res) => {
  Restaurant.find()
    .then((data) => {
      if (!data) {
        return res.sendStatus(404);
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message);
      res.sendStatus(500);
    });
});

module.exports = router;
