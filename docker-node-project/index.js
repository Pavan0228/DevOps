import mongoose from "mongoose";
import express from "express";

const app = express();

const url = "mongodb://mymongo:27017/test";

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB:", err);
    });

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
