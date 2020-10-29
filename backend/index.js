import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/portfolioDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

// routes(app);

app.get("/", (req, res) =>
    res.send(`Application is running on ${PORT}`)
);

app.listen(PORT, () =>
console.log(`Server is running on port ${PORT}`)
);
