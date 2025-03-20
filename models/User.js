const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  image: {
    type: String,
  },
  boards: [
    {
      type: mongoose.Schema.Types.ObjectID,
      ref: "Board",
    },
  ],
})

export default mongoose.models.User || mongoose.model("User", userSchema);
