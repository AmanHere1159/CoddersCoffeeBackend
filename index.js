const dotenv = require('dotenv');
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/productRoutes");
const app = express();
const mongo = require("./config/db");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
const cors = require('cors');
app.use(cors({
  origin: ['http://localhost:5173','codders-coffee-backend.vercel.app'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

const PORT = process.env.PORT;
const HOST_NAME = process.env.HOST_NAME || "localhost";


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

app.get("/", (req, res) => {
  console.log("user requested for : ", req.url);
  res.send("Server is up and running ");
});
app.use("/Coffee", router);

module.exports = app;


app.listen(PORT, HOST_NAME, () => {
  console.log(`Listining on http://${HOST_NAME}:${PORT}`);
});