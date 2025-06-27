const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const additionalInfoSchema = new mongoose.Schema({
  title1: { type: String, required: true },
  description1: { type: String, required: true },
  title2: { type: String, required: true },
  description2: { type: String, required: true },
  title3: { type: String, required: true },
  description3: { type: String, required: true },
});

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  dimensions: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
  },
  stock: {
    type: Number,
    required: true,
  },
  images: [
    {
      url: { type: String, required: true },
      alt: { type: String, required: true },
    },
  ],
  category: {
    type: String,
    required: true,
    enum: ["furniture", "lighting", "decor", "bedding", "outdoor", "kitchen"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [reviewSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  additionalInfo: [additionalInfoSchema],
});

module.exports = mongoose.model("product", productSchema);
