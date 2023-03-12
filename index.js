import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

/* IMPORTING ROUTES */
import userRoutes from "./routes/user.js";
import destinationRoutes from "./routes/destination.js";

/* CONFIG */
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://34.125.71.166:${PORT}`)
    });
}).catch((error) => {
    console.log(`${error} did not connect`)
});

/* ROUTES */
app.use("/user", userRoutes);
app.use("/destination", destinationRoutes);
