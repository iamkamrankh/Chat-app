const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware.js");
const app = express();

// need to tell the server to accept the json data
app.use(express.json()); //to accept json data
// the dotenv short work

dotenv.config();
connectDB()
  .then(() => {
    // Start your server
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });
app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/user", userRoutes);
// below is error handler
app.use(notFound);
app.use(errorHandler);

// just remove after the connecting of mongodb we done with it
// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });
// app.get("/api/chat/:id", (req, res) => {
//   //   console.log(req.params.id);
//   const singlechat = chats.find((c) => c._id == req.params.id);
//   res.send(singlechat);
// });

// after installing the npm i dotenv we have create the below single line port
const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`server started on PORT 5000 ${PORT}`.yellow.bold)
);
