import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  currentBalance: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

export default mongoose.model('Customer', customerSchema);
