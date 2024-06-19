import express from 'express';
import router from './router/router.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 1003;

app.use(cors());
app.use(express.json());
app.use("/", router);

mongoose.connect("mongodb+srv://christin:ouHLMYZXHEP6B58i@cluster0.golc87t.mongodb.net/Bankdb")
    .then(() => {
        console.log("connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error);
    });

app.listen(port, () => {
    console.log("Server started on port", port);
});
