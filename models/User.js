const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
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
  mobno: {
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

const User = mongoose.model('User', userSchema);

module.exports = User;

