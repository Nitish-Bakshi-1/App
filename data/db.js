import mongoose from "mongoose";
import dotenv from "dotenv";

console.log();

export const connectDb = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:2k9SlYj4HLGfSltI@cluster0.j7jusce.mongodb.net/",
      {
        dbName: "App",
      }
    )
    .then(() => console.log(`Database Connected`))
    .catch((e) => console.log(e));
};
