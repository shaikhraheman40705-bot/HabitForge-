import mongoose from 'mongoose';
const habitSchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: String,
  color: {type: String, default: '#10b981'},
  icon: {type: String, default: '🔥'},
  streak: {type: Number, default: 0},
  completionHistory: [Date]
});
export default mongoose.model('Habit', habitSchema);