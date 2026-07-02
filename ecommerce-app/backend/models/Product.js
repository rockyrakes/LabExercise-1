const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, required: true, index: true },
  brand: { type: String, index: true },
  rating: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  image: String,
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);