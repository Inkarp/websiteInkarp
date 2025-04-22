const mongoose = require('mongoose');

const instrumentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },  // Could be something like 'Musical', 'Mechanical', etc.
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true }, // Detailed description of the vertical
  features: [{ type: String }], // Array of features
  stockQuantity: { type: Number, default: 0 }, // Amount in stock
  imageUrl: { type: String }, // URL to the product image
  ratings: {
    averageRating: { type: Number, default: 0 },
    numberOfReviews: { type: Number, default: 0 },
  },
  tags: [{ type: String }], // e.g., ['bestseller', 'new', 'limited']
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Verticals', instrumentSchema);
