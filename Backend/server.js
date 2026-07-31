const mongoose = require("mongoose");
require("dotenv").config();
const app = require('./app');

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB not connected", err);
    });