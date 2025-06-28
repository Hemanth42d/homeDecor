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

const ownerSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address: [addressSchema],
  profilePhoto: {
    type: String,
  },
  bio: {
    type: String,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
});

module.exports = mongoose.model("owner", ownerSchema);
