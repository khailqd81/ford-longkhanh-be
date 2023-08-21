const mongoose = require("mongoose");
// const MONGO_URL =
//   "mongodb+srv://khailqd81:Mylove123@forddb.khlbrki.mongodb.net/ford-management?retryWrites=true&w=majority";
try {
  mongoose.connect(process.env.MONGO_URL);
  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("Connected to database"));
} catch (error) {
  console.log("Error connect to mongo: ", error);
}
