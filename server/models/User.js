import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  email: {type: String, unique: true},
  password: String,
  xp: {type: Number, default: 0},
  level: {type: Number, default: 1},
  isPremium: {type: Boolean, default: false},
  badges: [String]
});
export default mongoose.model('User', userSchema);