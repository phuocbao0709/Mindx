import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://phuocbao0709_db_user:juWV6sAQlYzQ1ufc@web95.vfgmsan.mongodb.net/",
    );
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
