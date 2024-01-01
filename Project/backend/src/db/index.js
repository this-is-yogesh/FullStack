import mongoose from "mongoose";
import { MONGODB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionhost = await mongoose.connect(
      `${process.env.MONGODB_URL}/${MONGODB_NAME}`
    );
    console.log(" \n MONGODB is connected at ", connectionhost.connection.host);
  } catch (error) {
    console.log("MONGODB has thrown error", error);
    throw error;
  }
};

export default connectDB;
