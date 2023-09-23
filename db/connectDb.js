import mongoose from "mongoose";

export const connectMongo = async () =>
  mongoose.connect(process.env.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
