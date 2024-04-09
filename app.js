const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const dbURI = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@blog.ki8r0br.mongodb.net/doctorchebo`;
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// blog routes
app.use("/blogs", blogRoutes);

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use((req, res) => {
  res.status(404);
  res.render("404");
});
