import mongoose from 'mongoose';

const badgeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  minPoints: { type: Number, required: true },
});

export default mongoose.model('Badge', badgeSchema);
