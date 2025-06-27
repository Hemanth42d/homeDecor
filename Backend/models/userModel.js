const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  fullName: { type: String },
  phone: { type: String },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  postalCode: { type: String },
  country: { type: String, default: "India" },
  isDefault: { type: Boolean },
});

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    unquie: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    unquie: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
  profilePhoto: {
    type: String,
    // default :
  },
  address: [addressSchema],
  whishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  cart: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
      quantity: {
        type: Number,
      },
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("user", userSchema);
