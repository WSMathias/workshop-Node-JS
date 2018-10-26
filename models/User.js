const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
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
  type: {
    type: Number,
    default: 1
  }, // 1: normal user, 2: trainer
  profile_picture: String,
  phone: String,
  email_verified: Boolean,
  phone_verified: Boolean,
  social: [],
  documents: [mongoose.Schema.Types.Mixed],
  gender: Number, // 1: Male, 2: Female, 3: Unspecified
  geo: mongoose.Schema.Types.Mixed,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

