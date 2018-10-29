export {}
const mongoose = require('mongoose');

const { Schema } = mongoose;
const bookingSchema = new Schema({
  vendor: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Vendor'
  },
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
  bookingType: {
    type: String,
    required: true
  },
  BookingFrom: { type: String },
  BookingTo: {
    type: String
  },
  priceToPay: {
    type: String
  },
  uuid: {
    type: String
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Booking = mongoose.model('Booking', bookingSchema);


module.exports = Booking;

