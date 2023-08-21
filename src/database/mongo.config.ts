import mongoose from "mongoose";

export function connect() {
 return mongoose
    .connect(process.env.MONGO_URL!, { tls: true })
    .then(() => console.log("Data base connected"))
    .catch((err) => console.log("Hey there is some error"));
}
