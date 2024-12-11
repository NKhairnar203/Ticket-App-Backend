import mongoose from "mongoose";

const Connect = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
function connectDB() {
  return Connect.then(() => console.log("Connected to MongoDB...")).catch(
    (err) => console.error(err)
  );
}

export default connectDB;
