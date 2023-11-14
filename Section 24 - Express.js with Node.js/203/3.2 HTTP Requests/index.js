import express from "express"
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Server is runing on port 3000");
})

app.get("/", (req, res) => {
    res.send("Hello World!")
})