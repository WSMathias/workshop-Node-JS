const mongoose = require('mongoose');

const { Schema } = mongoose;
const vehicleSchema = new Schema({
  vendor: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Vendor'
  },
  type: {
    type: String,
    required: true
  },
  charges: { type: String },
  category: {
    type: String
  },
  description: {
    type: String
  },
  vehicle_age: {
    type: String
  },
  regionAvailability: [],
  // list of places where this vehicle can be available
  vehicle_number: {
    type: String
  },
  vehicle_status: {
    type: String
  },
  picture: [],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

vehicleSchema.virtual('booking', {
  ref: 'Booking',
  localField: '_id',
  foreignField: 'vehicle'
});
vehicleSchema.virtual('review', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'vehicle'
});
module.exports = Vehicle;

