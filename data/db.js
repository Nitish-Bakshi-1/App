import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "App",
    })
    .then(() => console.log(`Database Connected`))
    .catch((e) => console.log(e));
};
