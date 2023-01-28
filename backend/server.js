const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;
const databasefolder = process.env.DB_DATABASE || "";
const user = process.env.DB_USERNAME || "";
const password = process.env.DB_PASSWORD || "";
mongoose.set("strictQuery", false);

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@cluster0.boyyyle.mongodb.net/${databasefolder}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    app.listen(port, () => {
      console.log(
        `mongoose.connect + Сервер запущен! -  http://localhost:${port}`
      );
    });
  } catch (err) {
    console.log(err);
  }
}
start(); // npm run dev

app.get("/", (reg, res) => {
  res.send("Hi! This is backend page. ");
});
