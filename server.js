import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import searchRoute from "./routes/searchRoute.js";
import updateRoute from "./routes/updateRoute.js";

dotenv.config();

const app = express();
const port = 3001;
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const dbConnectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

console.log("Loading restaurants server... 🧆");

app.use(express.json());

app.use(cors());
// Remember to run your middleware before any of your routes!

mongoose
  .connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected! 😍"))
  .catch((error) => {
    console.log("Database is not connected! ☹️");
    console.log(error);
  });

app.use("/search", searchRoute);
app.use("/update",updateRoute)
app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
});
