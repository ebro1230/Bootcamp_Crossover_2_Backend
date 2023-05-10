const mongoose = require("mongoose");

const newRestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zip: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    open: {
      type: String,
      required: true,
    },
    close: {
      type: String,
      required: true,
    },
    delivery: {
      type: Boolean,
      required: true,
    },
    menu: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    pics: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", newRestaurantSchema);
module.exports = Restaurant;
