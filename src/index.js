const express = require("express");
const dotenv = require("dotenv").config();
const referralRoutes = require("./routes/referralRoutes.js");
const cors = require("cors");
const app = express();

// Middlewares
app.use(cors({
    origin: "*"
}));
app.use(express.json());


// Routes
app.get("/", (req, res) => {
    try {
        res.status(200).json({
            statusCode: 200,
            Mesage: "API is working"
        })
    } catch (error) {
        console.error(error);
        return res.statusCode(500).json({
            statusCode: 500,
            Message: "Internal Server Error"
        });
    }
})
app.use("/api", referralRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Port is running on ${PORT}`);
    }
})
