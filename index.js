const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.router.js");

const app = express();

mongoose
    .connect("mongodb://mongouser:mongopass@127.0.0.1:27017/admin", {
        authSource: "admin",
    })
    .then(() => {
        console.log("MongoDB connected!");
        app.listen(3000, () => {
            console.log("Hello World");
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute);
