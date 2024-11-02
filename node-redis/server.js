import express from "express";
import axios from "axios";
import client from "./client.js";

const app = express();

app.get("/", async (req, res) => {

    const chechVal = await client.get("photos")

    if(chechVal){
        res.json(JSON.parse(chechVal));
        return;
    }

    const url = "https://jsonplaceholder.typicode.com/photos";

    axios
        .get(url)
        .then((response) => {
            client.set("photos", JSON.stringify(response.data));
            client.expire("photos", 60);
            res.json(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
