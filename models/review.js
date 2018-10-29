const mongoose = require('mongoose');

const { Schema } = mongoose;
const reviewSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User'
  },
  vehicle: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Vehicle'
  },
  message: {
    type: String,
    required: true
  },
  feedback: { type: String },
  ratings: { type: String },
  uuid: {
    type: String
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Review = mongoose.model('Review', reviewSchema);


module.exports = Review;

