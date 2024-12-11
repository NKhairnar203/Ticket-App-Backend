import mongoose from "mongoose";

const Connect = mongoose.connect(
  "mongodb+srv://nkhairnar543:4Uv44Wp7DhWP5N94@cluster0.clk4v.mongodb.net/ticket?retryWrites=true&w=majority&appName=Cluster0"
);
function connectDB() {
  return Connect.then(() => console.log("Connected to MongoDB...")).catch(
    (err) => console.error(err)
  );
}

export default connectDB;
