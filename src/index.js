const express = require("express");
const dotenv = require("dotenv").config();
const referralRoutes = require("./routes/referralRoutes.js");
const cors = require("cors");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


// Routes
app.use("/api", referralRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Port is running on ${PORT}`);
    }
})
