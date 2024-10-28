const express = require("express");
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares");
const userRouter = require('./routes/user');

const app = express();
const PORT = 8080;

// Connection 
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('log.txt')); // Change this line to pass 'log.txt' as a string

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () =>
    console.log(`Server Started at Port: ${PORT}`)
);
