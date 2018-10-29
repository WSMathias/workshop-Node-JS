const mongoose = require('mongoose');

const { Schema } = mongoose;
const vendorSchema = new Schema({
  provider: {
    type: String
  },
  username: {
    type: String,
    required: true
  },
  password: { type: String },
  email: {
    index: { unique: true },
    type: String
  },
  address: {
    type: String
  },
  meta: {
    type: Object
  },
  uuid: {
    type: String
  },
  status: {
    type: Number,
    default: 1
  },
  profile_picture: String,
  phone: String,
  email_verified: Boolean,
  phone_verified: Boolean
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Vendor = mongoose.model('Vendor', vendorSchema);

vendorSchema.virtual('vehicle', {
  ref: 'Vehicle',
  localField: '_id',
  foreignField: 'vendor'
});
vendorSchema.virtual('booking', {
  ref: 'Booking',
  localField: '_id',
  foreignField: 'vendor'
});

module.exports = Vendor;

